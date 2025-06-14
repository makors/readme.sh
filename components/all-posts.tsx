import Link from "next/link";
import { Post } from "@/app/page";

export default async function AllPosts({ posts }: { posts: Post[] }) {
    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div key={post.slug} className="p-4 rounded-lg transition-all hover:bg-gray-800/30">
                    <Link 
                        href={`/posts/${post.slug}`}
                        className="block group"
                    >
                        <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                            {post.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.lastModified}</span>
                            <span>•</span>
                            <span className="px-2 py-1 rounded bg-gray-700/50 text-xs">
                                {post.category}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
