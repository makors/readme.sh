import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="p-6 rounded-xl border border-gray-800/50 bg-gray-900/20">
        <div className="h-8 bg-gray-800 rounded-lg mb-4"></div>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="h-4 bg-gray-800 rounded w-20"></div>
          <div className="h-4 bg-gray-800 rounded w-24"></div>
          <div className="h-4 bg-gray-800 rounded w-16"></div>
        </div>
        <div className="h-4 bg-gray-800 rounded w-32"></div>
      </div>
    </div>
  );
}

export function PostCardSkeletonGrid() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  );
}