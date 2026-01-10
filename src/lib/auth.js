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

console.log("AUTH_SECRET length:", process.env.AUTH_SECRET?.length);
console.log("AUTH_URL:", process.env.AUTH_URL);
console.log("NEXTAUTH_SECRET length:", process.env.NEXTAUTH_SECRET?.length);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);


// Auth Component
const isString = (value) => typeof(value) === 'string';
export const authConfig = {
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
      credentials:{ 
        email:{ 
          label: 'Email', 
          type: 'email', 
          placeholder: 'you@example.com'
        },
        password:{ 
          label: 'Password', 
          type: 'password'
        }, 
      },

        // async authorize(credentials){ 
        //   const emailRaw = credentials?.email;
        //   const passwordRaw = credentials?.password; 
        //   if(!isString(emailRaw) || !isString(passwordRaw)) return null; 
        //   const email = emailRaw.trim().toLowerCase(); 
        //   const password = passwordRaw; 
        //   if(!email || !password) return null; 
        //   const user = await prisma.user.findUnique({
        //     where:{email}, 
        //     select:{ 
        //       id: true, 
        //       email: true, 
        //       username: true, 
        //       passwordHash: true,
        //     },
        //   });
        //   if(!user?.passwordHash) return null; 
        //   const match = await bcrypt.compare(password, user.passwordHash);
        //   if(!match) return null; 
        //   return { 
        //     id: user.id, 
        //     email: user.email, 
        //     name: user.username, 
        //   }
        // }
        async authorize(credentials) {
  console.log("AUTHORIZE creds:", credentials);

  const email = String(credentials?.email ?? "").trim().toLowerCase();
  const password = String(credentials?.password ?? "");

  if (!email || !password) {
    console.log("AUTHORIZE fail: missing email/password");
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, username: true, passwordHash: true },
  });

  console.log("AUTHORIZE user:", user);

  if (!user?.passwordHash) {
    console.log("AUTHORIZE fail: no passwordHash");
    return null;
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  console.log("AUTHORIZE match:", ok);

  if (!ok) return null;

  console.log("AUTHORIZE SUCCESS");
  return { id: user.id, email: user.email, name: user.username };
}

    })
  ],
  session: { strategy: "database" },
  secret: process.env.AUTH_SECRET,
//   callbacks: {
//   async session({ session, user, token }) {
//     if (session.user) {
//       console.log(session?.user);
//       session.user.id = user?.id ?? token?.sub ?? null;
//     }
//     return session;
//   },
// }

    callbacks: {
  async jwt({ token, user }) {
    if (user) token.id = user.id;
    return token;
  },
  async session({ session, token }) {
    if (session.user) session.user.id = token.id ?? null;
    return session;
  },
},
  
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
