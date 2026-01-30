"use client";

import { useState, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { BlogPost } from "@/types/blog";

import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";
import ArticleCard from "./ArticleCard";
import ArticleModal from "../ui/ArticleModal";
import SortFilter from "../ui/SortFilter";

export default function ArticleGrid({ blogs }: { blogs: BlogPost[] }) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = useMemo(() => {
    const unique = new Set(blogs.map((b) => b.category));
    return ["All", ...Array.from(unique)];
  }, [blogs]);

  const filtered = useMemo(() => {
    const result = blogs.filter((post) => {
      const query = search.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.content_text.toLowerCase().includes(query);

      const matchesCategory = category === "All" || post.category === category;

      return matchesSearch && matchesCategory;
    });

    return result.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
      }
    });
  }, [blogs, search, category, sortBy]);

  const handleCardClick = useCallback((post: BlogPost) => {
    setActivePost(post);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActivePost(null);
  }, []);

  return (
    <section
      id="articles"
      className={`px-4 py-12 transition-colors
        ${darkMode ? "bg-gray-950 text-gray-300" : "bg-white text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-4">
          <div className="order-1 md:order-2 w-full md:w-80">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="order-2 md:order-1 w-full md:w-56">
            <CategoryFilter
              categories={categories}
              active={category}
              onSelect={setCategory}
            />
          </div>
          <div className="order-3 md:order-3 w-full md:w-56 relative">
            <SortFilter value={sortBy} onChange={setSortBy} />
          </div>
        </div>
        <p className="mb-4 text-sm opacity-70">
          {filtered.length} result{filtered.length !== 1 && filtered.length !== 0 && "s"} found
        </p>
        {filtered.length === 0 && (
          <p
            className="z-10 mt-10 relative text-[20px] text-center  before:content-['OOPS'] before:absolute before:left-0 before:top-[-50px] before:w-full before:text-center before:text-[90px] before:font-bold  before:text-blue-500 before:drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)] before:-z-10 before:opacity-30"
          >
            No articles match your search.
          </p>

        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              onClick={() => handleCardClick(post)}
            />
          ))}
        </div>
        {activePost && (
          <ArticleModal post={activePost} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
}
