"use client";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { HiSearch } from "react-icons/hi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="relative w-full md:w-80">
      <HiSearch
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base ${darkMode ? "text-gray-400" : "text-gray-500"
          }`}
      />
      <input
        type="search"
        placeholder="Search articles..."
        value={value}
        onChange={handleChange}
        className={`w-full appearance-none rounded-full pl-11 pr-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${darkMode
          ? "bg-gray-900 text-gray-100 border border-gray-700 placeholder:text-gray-500 hover:bg-gray-800 shadow-[0_0_10px_#505050]"
          : "bg-white text-gray-900 border border-gray-300 placeholder:text-gray-400 hover:bg-gray-50 shadow-[0_0_24px_#0000001c]"
          }`}
        aria-label="Search articles"
      />
    </div>
  );
}