import { ApiResponse } from "@/app/types/blog";

const API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL;

export async function fetchBlogs() {
   if (!API_URL) {
    throw new Error("Blog API URL is missing in environment variables");
  }

  const res = await fetch(
    `${API_URL}?offset=0&amp;limit=10`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data: ApiResponse = await res.json();
  return data.blogs;
}
