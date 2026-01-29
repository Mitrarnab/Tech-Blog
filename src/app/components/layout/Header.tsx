"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import { toggleTheme } from "@/app/store/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <header className={`border-b sticky top-0 z-40 transition-colors duration-300 ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"} border-t-0`}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <span
          className={`text-xl font-bold transition-colors duration-300
            ${darkMode ? "text-white" : "text-gray-900"}
          `}
        >
          Tech<span className="font-extrabold text-blue-500">Blog</span>
        </span>
        <div className="flex items-center gap-4">
          <ul className="flex md:gap-6 gap-2 text-sm">
            {["Articles", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative transition-colors duration-300 font-bold
                    ${darkMode ? "text-white" : "text-gray-900"}
                    before:content-[''] before:absolute before:left-0 before:-bottom-1
                    before:h-0.5 before:w-0 before:bg-blue-500
                    before:transition-all before:duration-300 hover:before:w-full
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <label className="relative inline-block cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => dispatch(toggleTheme())}
              className="sr-only peer"
              aria-label="Toggle Theme"
            />
            <span
              className="block w-[3.5em] h-[2em] rounded-full bg-zinc-100 transition-colors duration-400 peer-checked:bg-[#303136]"
            />
            <span
              className={`absolute top-1/2 left-[0.3em] h-[1.4em] w-[1.4em] -translate-y-1/2 rounded-full transition-all duration-400 ${darkMode ? "" : "bg-gradient-to-bl from-blue-400 to-yellow-400"}  peer-checked:left-[calc(100%-1.4em-0.3em)] peer-checked:bg-[#303136] peer-checked:shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]`}
            />
          </label>
        </div>
      </nav>
    </header>
  );
}