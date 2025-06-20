import AllPosts from "@/components/all-posts";
import { readdirSync } from "fs";
import path from "path";

export const metadata = {
  title: "home | readme.sh",
  description: "home page",
};

export interface Post {
  name: string;
  author: string;
  lastModified: string;
  category: string;
  slug: string;
}

async function getPosts(): Promise<Post[]> {
  const postPaths = readdirSync(path.join(process.cwd(), "content"));
  const posts: Post[] = [];

  for (const post of postPaths) {
      const { metadata } = await import(`../content/${post}`);
      posts.push({
          name: metadata.title,
          author: metadata.author,
          lastModified: metadata.lastModified,
          category: metadata.category,
          slug: post.replace(".mdx", ""),
      });
  }

  // our format is 3-30-2025
  posts.sort((a, b) => {
      return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return <AllPosts posts={posts} />;
}
