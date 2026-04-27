import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import * as bcrypt from "bcryptjs"
import supabaseAdmin from "@/lib/supabaseAdmin"

function splitName(name) {
  const trimmed = (name || "").trim()
  if (!trimmed) {
    return { firstName: "", lastName: "" }
  }

  const [firstName, ...rest] = trimmed.split(/\s+/)
  return {
    firstName,
    lastName: rest.join(" "),
  }
}

async function getUserByEmail(email) {
  if (!email) return null

  const { data, error } = await supabaseAdmin
    .from("users")
    .select("id, email, name, first_name, last_name, image")
    .eq("email", email)
    .maybeSingle()

  if (error) {
    console.error("Auth user lookup error:", error)
    return null
  }

  return data ?? null
}

async function ensureGoogleUser(user) {
  const email = user?.email?.trim().toLowerCase()
  if (!email) return null

  const existing = await getUserByEmail(email)
  const { firstName, lastName } = splitName(user?.name)

  if (existing) {
    const patch = {}

    if (!existing.name && user?.name) patch.name = user.name
    if (!existing.first_name && firstName) patch.first_name = firstName
    if (!existing.last_name && lastName) patch.last_name = lastName
    if (!existing.image && user?.image) patch.image = user.image

    if (Object.keys(patch).length > 0) {
      const { error } = await supabaseAdmin.from("users").update(patch).eq("id", existing.id)
      if (error) {
        console.error("Auth user patch error:", error)
      }
    }

    return {
      id: existing.id,
      email,
      name: existing.name || user?.name || firstName || email,
      image: existing.image || user?.image || null,
    }
  }

  const { data: inserted, error } = await supabaseAdmin
    .from("users")
    .insert({
      email,
      name: user?.name || firstName || email,
      first_name: firstName,
      last_name: lastName,
      image: user?.image || null,
    })
    .select("id, email, name, image")
    .single()

  if (error) {
    console.error("Google user creation error:", error)
    return null
  }

  return inserted
}

/** @type {import("next-auth").NextAuthOptions} */
export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const { data: user, error } = await supabaseAdmin
          .from("users")
          .select("id, email, name, password_hash")
          .eq("email", credentials.email.trim().toLowerCase())
          .maybeSingle()

        if (error || !user?.password_hash) return null

        const valid = await bcrypt.compare(credentials.password, user.password_hash)
        if (!valid) return null

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/me-connecter",
    error: "/me-connecter",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") {
        return true
      }

      const dbUser = await ensureGoogleUser(user)
      if (!dbUser) {
        return "/me-connecter?error=google_auth_failed"
      }

      user.id = dbUser.id
      user.email = dbUser.email
      user.name = dbUser.name
      user.image = dbUser.image

      return true
    },
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id
      }

      if (!token.id && token?.email) {
        const dbUser = await getUserByEmail(token.email.trim().toLowerCase())
        if (dbUser?.id) {
          token.id = dbUser.id
        }
      }

      return token
    },
    async session({ session, token }) {
      if (session.user && token?.id) {
        session.user.id = token.id
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }

      try {
        const nextUrl = new URL(url)
        if (nextUrl.origin === baseUrl) {
          return url
        }
      } catch {}

      return baseUrl
    },
  },
}
