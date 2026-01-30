"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";

export default function Footer() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <footer
      id="footer"
      className={`
        border-t py-6 text-center text-sm transition-all duration-300
        ${darkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-cyan-200 text-gray-700 border-gray-300"
        }
      `}
    >
      © {new Date().getFullYear()} <span
        className={` font-bold transition-all duration-300
            ${darkMode ? "text-white" : "text-gray-900"}
          `}
      >
        Tech<span className="font-extrabold text-blue-500">Blog</span>
      </span>. All rights reserved.
    </footer>
  );
}
