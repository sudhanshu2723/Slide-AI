import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const client = globalThis.prisma || new PrismaClient()
// used to prevent making multiple instances of the client and use the same client after every hard reload
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client
