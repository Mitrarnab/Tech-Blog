"use client";

import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Loading() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center gap-4 transition-colors ${darkMode ? "bg-gray-950 text-gray-300" : "bg-white text-gray-700"
                }`}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <FaSpinner
                className={`text-4xl animate-spin ${darkMode
                    ? "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]"
                    : "text-blue-500"
                    }`}
            />
            <p className={`text-sm tracking-wide ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Loading <span className="font-bold">Tech<span className="font-extrabold text-blue-500">Blog</span></span>...
            </p>
        </div>
    );
}