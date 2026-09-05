import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "@/lib/posts";
import { site as meta } from "@/lib/site";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: meta.name,
    description: meta.description,
    site: context.site ?? meta.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
