import { PostResponse } from "../posts";

export default async function fetchPosts() {
  const BASE_API = "https://jsonplaceholder.typicode.com";
  const data = await fetch(`${BASE_API}/posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}
