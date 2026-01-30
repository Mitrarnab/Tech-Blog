"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { BlogPost } from "@/types/blog";
import { articleSchema } from "@/lib/seoSchemas";
import { formatDate } from "@/lib/formatDate";
import { HiXMark } from "react-icons/hi2";

interface Props {
  post: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ post, onClose }: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(() => onClose(), [onClose]);
  const stop = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={handleBackdropClick}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post)),
        }}
      />

      <div
        className={`flex flex-col w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden transition-colors ${darkMode
          ? "bg-gray-900 text-gray-200 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
          : "bg-white text-gray-900 shadow-xl"
          }`}
        role="dialog"
        aria-modal="true"
        onClick={stop}
      >

        <header
          className={`sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-4 border-b ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
            }`}
        >
          <h2 className="text-xl md:text-2xl font-bold leading-snug">
            {post.title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Close article"
            className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center transition-colors ${darkMode
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
          >
            <HiXMark className="text-lg" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-6">
            <Image
              src={post.photo_url}
              alt={`Article image for ${post.title}`}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <article
            className={`prose max-w-none ${darkMode ? "prose-invert" : ""
              } prose-headings:font-semibold prose-a:text-blue-500 hover:prose-a:underline`}
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        </div>

        <footer
          className={`sticky bottom-0 z-10 px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 text-sm ${darkMode
            ? "bg-gray-900 border-gray-800 text-gray-400"
            : "bg-white border-gray-200 text-gray-600"
            }`}
        >
          <div className="flex items-center gap-3">
            <span>{formatDate(post.created_at)}</span>

            {post.category && post.category !== "All" && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${darkMode ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"
                  }`}
              >
                {post.category}
              </span>
            )}
          </div>
          <span className="opacity-70">
            {post.content_text?.length
              ? `${Math.ceil(post.content_text.length / 800)} min read`
              : ""}
          </span>
        </footer>
      </div>
    </div>
  );
}