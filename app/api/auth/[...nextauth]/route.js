import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

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
            async authorize(credentials, req) {
                console.log('Credentials:', credentials); // Ajouter ce log
                if (!credentials.email || !credentials.password) {
                  throw new Error("Invalid Email or Password");
                }
                
                try {
                  const res = await fetch(`${API_URL}/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                  });
              
                  const user = await res.json();
              
                  console.log('User:', user); // Ajouter ce log
              
                  if (!res.ok) {
                    throw new Error(user.message || 'Login failed');
                  }
              
                  return user;
                } catch (error) {
                  throw new Error(error.message || 'Login failed');
                }
            },
              
        }),
    ],
  
    secret: process.env.NEXTAUTH_SECRET,
    
    
    callbacks: {
        async session({ session }) {
            try {
                const res = await fetch(`${API_URL}/users/${session.user.email}`);
                const sessionUser = await res.json();
        
                if (!res.ok) {
                throw new Error(sessionUser.message || 'Fetching user failed');
                }
        
                session.user = { ...session.user, ...sessionUser };
                return session;
            } catch (error) {
                console.log('Error fetching user session:', error);
                return session;
            }
        },

        async signIn({ account, profile }) {
            if (account.provider === "google") {
                try {
                    const res = await fetch(`${API_URL}/users/google-signin`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: profile.email, name: profile.name, picture: profile.picture })
                    });

                    const user = await res.json();

                    if (!res.ok) {
                        throw new Error(user.message || 'Google sign-in a échoué');
                    }

                    return true;

                } catch (err) {
                    console.log("Error checking if user exists: ", err.message);
                    return false;
                }
            }

            return true;
        },
    },
});

export { handler as GET, handler as POST }
