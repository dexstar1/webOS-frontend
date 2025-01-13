import Image from 'next/image';
import Trending from './(home)/Trending';
import Tech from './(home)/Tech';
import Travel from './(home)/Travel';
import Other from './(shared)/Other';
import Sidebar from './(shared)/Sidebar';
import { prisma } from './api/client';
import { Posts } from '@prisma/client';

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.posts.findMany();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Posts> = [];
    const techPosts: Array<Posts> = [];
    const travelPosts: Array<Posts> = [];
    const otherPosts: Array<Posts> = [];

    posts.forEach((post: Posts, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === 'Tech') {
        techPosts.push(post);
      }
      if (post?.category === 'Travel') {
        travelPosts.push(post);
      } else if (post?.category === 'Interior Design') {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
