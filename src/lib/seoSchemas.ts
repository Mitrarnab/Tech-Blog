// app/lib/seoSchemas.ts
import { BlogPost } from "@/types/blog";

/**
 * WebSite Schema
 * Used once on the homepage
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tech Blog",
  url: "https://techblogbyarnab.vercel.app/",
  description:
    "A fast, SEO-optimized technical blog covering frontend, backend, and modern web development.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Arnab Mitra",
    logo: {
      "@type": "ImageObject",
      url: "https://techblogbyarnab.vercel.app/logo.png",
    },
  },
};

/**
 * Article Schema
 * Used for each blog post (modal open)
 */
export const articleSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `https://techblogbyarnab.vercel.app/#article-${post.id}`,
  headline: post.title,
  description: post.description,
  image: {
    "@type": "ImageObject",
    url: post.photo_url,
    width: 800,
    height: 400,
  },
  author: {
    "@type": "Person",
    name: "Arnab",
  },
  publisher: {
    "@type": "Organization",
    name: "Tech Insights",
    logo: {
      "@type": "ImageObject",
      url: "https://techblogbyarnab.vercel.app/logo.png",
    },
  },
  datePublished: post.created_at,
  dateModified: post.updated_at,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://techblogbyarnab.vercel.app",
  },
  articleSection: post.category,
  isAccessibleForFree: true,
});
