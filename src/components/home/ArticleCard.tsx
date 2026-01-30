"use client";

import Image from "next/image";
import { memo } from "react";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { FiTag } from "react-icons/fi";

interface Props {
  post: BlogPost;
  onClick: () => void;
}

const ArticleCard = memo(function ArticleCard({ post, onClick }: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <article
      className={`
    relative flex flex-col rounded-2xl overflow-hidden cursor-pointer
    transform transition-all duration-500 ease-in-out
    hover:-translate-y-2 hover:shadow-2xl
    ${darkMode
          ? "bg-gray-900 border border-gray-800 hover:shadow-[0_12px_32px_#505050]"
          : "bg-gray-50 border border-gray-200 hover:shadow-[0_12px_32px_#0000001c]"
        }
  `}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={post.photo_url}
          alt={`Cover image for ${post.title}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 hover:opacity-70" />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        {post.category && post.category !== "All" && (
          <div className="flex items-end gap-1.5 text-xl mb-2">
            <FiTag className="" /> <span
              className={`capitalize w-fi px-3 py-1 text-xs font-semibold rounded-full
          ${darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
                }
        `}
            >
              {post.category}
            </span>
          </div>
        )}

        <h2
          className={`
        text-lg font-semibold mb-2 line-clamp-2
        transform transition-transform duration-500 hover:translate-y-1
        ${darkMode ? "text-gray-100" : "text-gray-900"}
      `}
        >
          {post.title}
        </h2>

        <p
          className={`
        text-sm mb-3 line-clamp-3
        ${darkMode ? "text-gray-300" : "text-gray-600"}
      `}
        >
          {post.description}
        </p>

        <time
          className={`
        text-xs opacity-70
        ${darkMode ? "text-gray-400" : "text-gray-500"}
      `}
        >
          {formatDate(post.created_at)}
        </time>
      </div>
    </article>

  );
});

export default ArticleCard;
