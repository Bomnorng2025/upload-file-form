import { PostResponse } from "../posts";

export async function fetchPosts() {
  const BASE_API = "https://jsonplaceholder.typicode.com";
  const data = await fetch(`${BASE_API}/posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}

const API_URL = process.env.NEXT_PUBLIC_API;

export async function fetchCategories() {
  // const categories = await axios
  const data = await fetch(`${API_URL}/api/v1/categories/`);
  const categories = await data.json();
  return categories;
}
