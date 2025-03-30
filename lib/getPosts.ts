import { readdirSync } from "fs";
import path from "path";

export interface Post {
    name: string;
    author: string;
    lastModified: string;
    category: string;
    slug: string;
}


export default async function getPosts(): Promise<Post[]> {
    const postPaths = readdirSync(path.join(process.cwd(), "content"));
    const posts: Post[] = [];

    for (const post of postPaths) {
        const { metadata } = await import(`../content/${post}`);
        posts.push({
            name: metadata.title,
            author: metadata.author,
            lastModified: metadata.lastModified,
            category: metadata.category,
            slug: "/" + post.replace(".mdx", ""),
        });
    }

    // our format is 3-30-2025
    posts.sort((a, b) => {
        const dateA = new Date(a.lastModified);
        const dateB = new Date(b.lastModified);
        return dateB.getTime() - dateA.getTime();
    });

    return posts;
}