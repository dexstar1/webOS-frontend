import { NextRequest, NextResponse } from 'next/server';
// import { openai } from '../client';

type Params = {
  id: string;
};

// export async function POST(
//   request: NextRequest,
//   { params }: { params: Params }
// ) {
//   try {
//     const { title, role } = await request.json();
//     const id = params;

//     const aiResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'user',
//           content: `Create small blog post with html tags based on this title: ${title}`,
//         },
//         {
//           role: 'system',
//           content: `${
//             role || 'I am a helpful seo copy writer assistant'
//           }. Write with html tags.`,
//         },
//       ],
//     });

//     return NextResponse.json(aiResponse.data);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: NextRequest) {
  try {
    const { title, role } = await request.json();

    const url =
      'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/chat/completions';

    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'af2a704361mshc14e49e20419710p1ac865jsnace263858e21',
        'x-rapidapi-host':
          'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: `There are ten birds in a tree. A hunter shoots one. How many are left in the tree?`,
          },
        ],
        model: 'gpt-4o',
        max_tokens: 100,
        temperature: 0.9,
      }),
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
