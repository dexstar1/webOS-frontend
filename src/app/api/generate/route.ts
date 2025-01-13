import { NextRequest, NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require('@google/generative-ai');

export async function POST(request: NextRequest) {
  try {
    const { title, role } = await request.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Create small blog post with html tags based on this title: ${title}`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    // response.revalidate('/api/post');
    return NextResponse.json({ output: output });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
