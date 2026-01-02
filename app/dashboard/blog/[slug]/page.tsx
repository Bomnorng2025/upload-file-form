import PostCard from "@/components/PostCard";

async function fetchDetailPost(id: string) {
  const BASE_API = "https://jsonplaceholder.typicode.com";
  const data = await fetch(`${BASE_API}/posts/${id}`);
  const post = await data.json();
  return post;
}

export default async function PostCardDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await fetchDetailPost(slug);
  console.log("Post Detail:", post);

  return (
    <PostCard
      userId={post.userId}
      id={post.id}
      title={post.title}
      body={post.body}
    />
  );
}
