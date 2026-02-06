const API_URL = process.env.NEXT_PUBLIC_API;
export default async function uploadImageToServer() {
  const data = await fetch(`${API_URL}/api/v1/categories/`);
  const res = await data.json();
  return res;
}
