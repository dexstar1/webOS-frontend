import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../client';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; // Await the params object to extract `id`
    const { title, content } = await request.json();

    const post = await prisma.posts.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('request error', error);
    return NextResponse.json(
      { error: 'error updating posts' },
      { status: 500 }
    );
  }
}
