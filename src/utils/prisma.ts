import { PrismaClient } from "@prisma/client";


declare global{
    var prima: PrismaClient | undefined
}

export const prima  = global.prima || new PrismaClient();

if(process.env.NODE_ENV !== 'production') global.prima = prima;