import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {

  providers: [
    GithubProvider({
      clientId: '96c9e9be9b310a162ca6',
      clientSecret: "2387ddeca05c3643405d704d55c965105f203c94",
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