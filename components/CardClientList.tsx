import { PostResponse } from "@/lib/posts";
import { use } from "react";
import Cards from "./Cards";
import Link from "next/link";

export function CardClientList({
  fetchPost,
}: {
  fetchPost: Promise<PostResponse[]>;
}) {
  const posts = use(fetchPost);
  console.log("posts", posts);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
      {posts.map((post, index) => (
        <Link key={index} href={`/dashboard/blog/${post.id}`}>
          <Cards
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </div>
  );
}
