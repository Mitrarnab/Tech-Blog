"use client";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { BiSolidCategory } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onSelect,
}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect(e.target.value);
    },
    [onSelect]
  );

  return (
    <div className="relative w-full md:w-60 group">
      <label htmlFor="category-filter" className="sr-only">
        Filter articles by category
      </label>
      <BiSolidCategory
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base transition-colors ${darkMode ? "text-gray-400" : "text-gray-500"
          }`}
      />
      <HiChevronDown
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base transition-transform duration-200 group-focus-within:rotate-180 ${darkMode ? "text-gray-400" : "text-gray-500"
          }`}
      />
      <select
        id="category-filter"
        value={active}
        onChange={handleChange}
        className={`w-full capitalize appearance-none rounded-full pl-11 pr-11 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${darkMode
          ? "bg-gray-900 text-gray-100 border border-gray-700 hover:bg-gray-800 shadow-[0_0_10px_#505050]"
          : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-[0_0_24px_#0000001c]"
          }`}
        aria-label="Filter articles by category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}