import { PrismaClient } from '@prisma/client';
// import { Configuration, OpenAIApi } from 'openai';
import { OpenAI } from 'openai';

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export const openai = new OpenAI(client);
