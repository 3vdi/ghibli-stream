import { connectToDB } from "@/utils/db";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // Connect to MongoDB
          await connectToDB();

          // Find the user by email
          const user = await User.findOne({ email });

          if (!user) {
            return null; // User not found
          }

          // Compare the provided password with the stored hashed password
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null; // Passwords do not match
          }

          // Return the user if authentication is successful
          return user;
        } catch (error) {
          console.error("Error during login:", error);
          return null; // Handle errors gracefully
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST }
