import type { MetadataRoute } from "next";
import { fetchBlogs } from "@/lib/fetchBlogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://techblogbyarnab.vercel.app");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
    },
  ];

  let blogs = [];
  try {
    blogs = await fetchBlogs();
  } catch (err) {
    console.error("sitemap: failed to fetch blogs:", err);
    return staticRoutes;
  }

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog: any) => {
    const last = blog.updated_at ?? blog.created_at;
    return {
      url: `${baseUrl}/blogs/${blog.slug ?? blog.id}`,
      lastModified: last ? new Date(last) : now,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}