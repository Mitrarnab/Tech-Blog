"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactItem from "../ui/ContactItem";

export default function Contact() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <section
            id="contact"
            className={`py-20 transition-all duration-300 bg-gradient-to-b
        ${darkMode ? "from-gray-950 to-gray-900" : "from-white to-cyan-200"}
      `}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    <div className="space-y-6">
                        <div className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                            Tech<span className="text-blue-500 font-extrabold">Blog</span>
                        </div>
                        <h2 className={`text-4xl font-bold leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                            Let's build something <br /> <span className="text-blue-500">exceptional</span> together
                        </h2>
                        <p className={`text-lg leading-relaxed max-w-xl
              ${darkMode ? "text-gray-400" : "text-gray-600"}
            `}>
                            I transform complex ideas into fast, scalable, and elegant web experiences. If you'd like to collaborate or discuss frontend development, feel free to get in touch.
                        </p>
                    </div>
                    <div
                        className={`rounded-2xl p-8 transition-all
              ${darkMode
                                ? "bg-gray-900 border border-gray-800 shadow-[0_0_24px_rgba(0,0,0,0.7)]"
                                : "bg-white border border-gray-200 shadow-[0_0_24px_#0000001c]"
                            }
            `}
                    >
                        <h3 className={`text-xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                            Reach Out
                        </h3>

                        <div className="space-y-4">

                            <ContactItem
                                href="mailto:mitrarnab0@gmail.com"
                                label="Email"
                                value="mitrarnab0@gmail"
                                icon={HiOutlineMail}
                                lightBg="bg-blue-100"
                                lightText="text-blue-600"
                                darkText="text-blue-400"
                                hoverBg="group-hover:bg-blue-500 group-hover:text-white"
                            />

                            <ContactItem
                                href="https://github.com/Mitrarnab"
                                label="GitHub"
                                value="/Mitrarnab"
                                icon={FaGithub}
                                targetBlank
                                lightBg="bg-gray-100"
                                lightText="text-gray-700"
                                darkText="text-gray-300"
                                hoverBg="group-hover:bg-gray-800 group-hover:text-white"
                            />

                            <ContactItem
                                href="https://linkedin.com/in/mitrarnab"
                                label="LinkedIn"
                                value="/in/mitrarnab"
                                icon={FaLinkedinIn}
                                targetBlank
                                lightBg="bg-blue-100"
                                lightText="text-[#0A66C2]"
                                darkText="text-[#0A66C2]"
                                hoverBg="group-hover:bg-[#0A66C2] group-hover:text-white"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
