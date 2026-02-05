import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = process.env.BACKEND_API_URL || "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error("Email et mot de passe requis");
                }

                try {
                  const res = await fetch(`${API_URL}/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                  });

                  const user = await res.json();

                  if (!res.ok) {
                    throw new Error(user.message || 'Échec de connexion');
                  }

                  return user;
                } catch (error) {
                  console.error('Login error:', error);
                  throw new Error(error.message || 'Échec de connexion');
                }
            },

        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/me-connecter',
        error: '/me-connecter',
    },

    callbacks: {
        async jwt({ token, user, account, profile }) {
            // Ajouter les infos utilisateur au token lors de la connexion
            if (user) {
                token.id = user.id || user._id;
                token.email = user.email;
                token.name = user.name || user.firstName;
                token.picture = user.picture || user.profilePicture;
            }
            // Pour Google, ajouter les infos du profil
            if (account?.provider === "google" && profile) {
                token.email = profile.email;
                token.name = profile.name;
                token.picture = profile.picture;
            }
            return token;
        },

        async session({ session, token }) {
            // Ajouter les infos du token à la session
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.picture;
            }

            // Essayer de récupérer les données utilisateur du backend
            try {
                const res = await fetch(`${API_URL}/users/${session.user.email}`);
                if (res.ok) {
                    const sessionUser = await res.json();
                    session.user = { ...session.user, ...sessionUser };
                }
            } catch (error) {
                console.log('Error fetching user session:', error.message);
            }

            return session;
        },

        async signIn({ account, profile, user }) {
            if (account?.provider === "google") {
                try {
                    // Envoyer les données au backend pour créer/mettre à jour l'utilisateur
                    const res = await fetch(`${API_URL}/users/google-signin`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: profile.email,
                            name: profile.name,
                            picture: profile.picture,
                            googleId: account.providerAccountId
                        })
                    });

                    if (!res.ok) {
                        const errorData = await res.json().catch(() => ({}));
                        console.error("Google sign-in backend error:", errorData);
                        // On autorise quand même la connexion côté NextAuth
                        // L'utilisateur sera créé plus tard ou le backend gère l'erreur
                        return true;
                    }

                    return true;

                } catch (err) {
                    console.error("Error during Google sign-in:", err.message);
                    // En cas d'erreur réseau, on autorise quand même la connexion
                    // pour ne pas bloquer l'utilisateur
                    return true;
                }
            }

            return true;
        },
    },

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 jours
    },

    debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST }
