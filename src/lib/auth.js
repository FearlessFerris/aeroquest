// Auth 'Object Registry' Implementatiojn 


// Dependencies 
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from 'bcrypt';


// Components & Necessary Files 



// Auth Component
const isString = (value) => typeof (value) === 'string';
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    debug: true,
    trustHost: true,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'you@example.com'
                },
                password: {
                    label: 'Password',
                    name: 'password',
                    type: 'password'
                },
            },
            async authorize(credentials){ 
              const emailRaw = credentials?.email;
              const passwordRaw = credentials?.password; 
              if(!isString(emailRaw) || !isString(passwordRaw)) return null; 
              const email = emailRaw.trim().toLowerCase(); 
              const password = passwordRaw; 
              if(!email || !password) return null; 
              const user = await prisma.user.findUnique({
                where:{email}, 
                select:{ 
                  id: true, 
                  email: true, 
                  username: true, 
                  passwordHash: true,
                },
              });
              if(!user?.passwordHash) return null; 
              const match = await bcrypt.compare(password, user.passwordHash);
              if(!match) return null; 
              return { 
                id: user.id, 
                email: user.email, 
                name: user.username, 
              }
            }
        })
    ],
    pages: { 
      signIn: '/user/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: { 
      strategy: "jwt", 
      maxAge: 60 * 60 * 24 * 7,
    },
    callbacks: {
      async jwt({token, user}){ 
        if(user) token.id = user.id;
        return token;
      },
      async session({session, token}){ 
        if(session.user) session.user.id = token.id ?? null;
        return session;
      }  
    }
});

// export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);