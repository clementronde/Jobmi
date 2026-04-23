import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import supabaseAdmin from "@/lib/supabaseAdmin"

const handler = NextAuth({
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

        const { data: user } = await supabaseAdmin
          .from("users")
          .select("id, email, name, password_hash")
          .eq("email", credentials.email)
          .single()

        if (!user?.password_hash) return null

        const valid = await bcrypt.compare(credentials.password, user.password_hash)
        if (!valid) return null

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/me-connecter',
    error: '/me-connecter',
  },
  callbacks: {
    async signIn({ user, account }) {
      // Upsert user in Supabase on Google sign-in
      if (account?.provider === "google") {
        const { data: existing } = await supabaseAdmin
          .from("users")
          .select("id")
          .eq("email", user.email)
          .single()

        if (!existing) {
          await supabaseAdmin.from("users").insert({
            email: user.email,
            name: user.name,
            image: user.image,
          })
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id
      return session
    },
  },
})

export { handler as GET, handler as POST }
