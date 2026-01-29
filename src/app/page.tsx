
import { fetchBlogs } from "@/app/lib/fetchBlogs";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import ArticleGrid from "./components/home/ArticleGrid";
import Footer from "./components/layout/Footer";
import { websiteSchema } from "./lib/seoSchemas";
import Contact from "./components/home/Contact";

export default async function HomePage() {
  const blogs = await fetchBlogs();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <ArticleGrid blogs={blogs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}