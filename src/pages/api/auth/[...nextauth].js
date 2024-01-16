import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {

  providers: [
    GithubProvider({
      clientId: "8fb316f5e80c3c76953e",
      clientSecret: "d4a2afefbe84ef78e797fe9bbb4f4b8fb72158bc",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          
          return user
        } else {
         
          return null

        }
      }

    })

  ],
  pages: {
    signIn: "/login"
  }
}

export default NextAuth(authOptions)