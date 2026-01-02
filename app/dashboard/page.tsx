import PostCard from "../../components/PostCard";
import { PostResponse } from "../../lib/posts";

async function fetchPost() {
  const BASE_API = "https://jsonplaceholder.typicode.com";
  const data = await fetch(`${BASE_API}/posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}

export default async function DashboardPage() {
  const posts = await fetchPost();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
