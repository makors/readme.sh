import Link from "next/link";
import { Post } from "@/app/page";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

export default async function AllPosts({ posts }: { posts: Post[] }) {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Welcome to readme.sh
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Exploring the intersection of technology, development, and everything in between.
                </p>
            </div>

            {/* Posts Grid */}
            <div className="grid gap-6">
                {posts.map((post, index) => (
                    <article 
                        key={post.slug} 
                        className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-500 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 animate-slide-up"
                        style={{
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'both'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <Link 
                            href={`/posts/${post.slug}`}
                            className="block p-6 relative z-10"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Title */}
                                <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                    {post.name}
                                </h2>
                                
                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.lastModified}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Tag className="w-4 h-4" />
                                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Read More Indicator */}
                                <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                                    <span className="text-sm font-medium">Read more</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                        
                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500"></div>
                    </article>
                ))}
            </div>
            
            {/* Empty State */}
            {posts.length === 0 && (
                <div className="text-center py-16 animate-fade-in">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
                        <Tag className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">No posts yet</h3>
                    <p className="text-gray-400">Check back soon for new content!</p>
                </div>
            )}
        </div>
    );
}
