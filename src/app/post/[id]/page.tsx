import { prisma } from '../../api/client';
import Content from './Content';
import Sidebar from '../../(shared)/Sidebar';
import { FormattedPost } from '../../../../types';

type Props = {
  params: {
    id: string;
  };
};

const getPost = async (id: string) => {
  const post = await prisma.posts.findUnique({
    where: { id },
  });

  if (!post) {
    return null;
  }

  const formattedPost: FormattedPost = {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };

  return formattedPost;
};

export async function generateStaticParams() {
  const posts = await prisma.posts.findMany();
  return posts.map((post) => ({
    id: post.id,
  }));
}

const Post = async ({ params }: Props) => {
  const { id } = params;
  console.log('id', id);
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
