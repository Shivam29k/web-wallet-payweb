import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { signIn } from "next-auth/react";
import { Account, Session, User } from "next-auth";

export const NEXT_AUTH_OPTIONS = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "abc@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // user verification logic
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (existingUser) {
          const isPasswordMatched = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (isPasswordMatched) {
            return {
              id: existingUser.id.toString(),
              email: existingUser.email,
              name: existingUser.name,
            };
          }
          return null;
        } else {
          try {
            const user = await db.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
              },
            });

            return {
              id: user.id.toString(),
              email: user.email,
              name: user.name,
            };
          } catch (error) {
            console.log(error);
          }
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session: ({ session, token }: {token: JWT, session: any}) => {
      // console.log("session from session callback: ", session);
      // console.log("token from session callbaack: ", token);
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async signIn({user, account}: {user: User, account: Account | null} ) {
      if (account && account.provider === "google") {
        // console.log("account", account);
        // console.log("user", user);
        
        const existingUser = await db.user.findFirst({
          where:{
            email: user.email || "",
          }
        })

        if(!existingUser){
          const createdUser = await db.user.create({
            data: {
              email: user.email || "undefined",
              name: user.name,
              password:  bcrypt.hashSync(user.id, 10)
            }
          })
          user.id = createdUser.id.toString();
          return true;
        }
        user.id = existingUser.id.toString();
      }
      return true;
    }
  },
  //   use this when your coustom signin page
  //   pages: {
  //     signIn: "/signin",
  //   }
};
