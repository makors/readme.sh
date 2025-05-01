import AllPosts from "@/components/all-posts";
import { Skeleton } from "@/components/ui/skeleton";
import getPosts from "@/lib/getPosts";
import { Suspense } from "react";

export const metadata = {
  title: "home | readme.sh",
  description: "home page",
};

export default async function Home() {
  return <AllPosts />;
}
