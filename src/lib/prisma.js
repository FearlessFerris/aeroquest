// Prisma Client Singleton Implementation 


// Dependencies 
import 'server-only';
import { PrismaClient } from '@prisma/client';


// Components & Necessary Files
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
