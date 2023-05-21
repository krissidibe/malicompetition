import { prisma } from "./../../../utils/prisma";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from 'zod';
import { User } from '@prisma/client';

const loginUserSchema = z.object({
  email: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Invalid email'),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});
const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
        CredentialsProvider({
      credentials: {
        email: { type: 'text', placeholder: 'test@test.com' },
        password: { type: 'password', placeholder: 'Pa$$w0rd' },
      },

      async authorize(credentials, req) {
        const { email, password } = loginUserSchema.parse(req.body);

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) return null;
        

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return null;

        return user;
      },
    }),
  ],
  callbacks:{
    session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.email = (user as User).email;
        console.log({ user });
      }
      return token;
    },
  },
  pages:{
    signIn: "/signin"
  },

  session:{
    strategy:"jwt"
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions)
