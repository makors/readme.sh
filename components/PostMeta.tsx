import { Calendar, User, Tag, Clock } from "lucide-react";

interface PostMetaProps {
  author: string;
  lastModified: string;
  category: string;
  readTime?: string;
}

export default function PostMeta({ author, lastModified, category, readTime }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 p-4 bg-gray-900/30 rounded-lg border border-gray-800/50">
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-blue-400" />
        <span className="font-medium">{author}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-green-400" />
        <span>{lastModified}</span>
      </div>
      
      {readTime && (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-400" />
          <span>{readTime}</span>
        </div>
      )}
      
      <div className="flex items-center gap-2">
        <Tag className="w-4 h-4 text-purple-400" />
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30">
          {category}
        </span>
      </div>
    </div>
  );
}