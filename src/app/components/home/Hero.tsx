"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";

export default function Hero() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <section className={`bg-gradient-to-t ${darkMode ? " from-gray-950 to-gray-900" : " from-white to-cyan-300"} transition-all py-16 text-center duration-300`}>
      <h1 className={`text-4xl font-bold mb-4  ${darkMode ? "text-white" : "text-gray-900"} transition-all duration-300`}>
        Elevating the Standard of Modern Web Development
      </h1>
      <p className={` ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto transition-all duration-300`}>
        Welcome to <span
          className={` font-bold transition-all duration-300
            ${darkMode ? "text-white" : "text-gray-900"}
          `}>
          Tech<span className="font-extrabold text-blue-500">Blog</span>
        </span>, a conceptual platform designed to showcase the intersection of performance and aesthetics. This project serves as a technical demonstration of a fully responsive interface, featuring a custom-built theme controller. Whether you are browsing in Light or Dark mode, every component is optimized for speed, accessibility, and a seamless reading experience.
      </p>
    </section>
  );
}
