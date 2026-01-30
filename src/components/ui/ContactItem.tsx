"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { IconType } from "react-icons";

interface ContactItemProps {
    href: string;
    label: string;
    value: string;
    icon: IconType;
    targetBlank?: boolean;
    lightBg?: string;
    lightText?: string;
    darkBg?: string;
    darkText?: string;
    hoverBg?: string;
}

export default function ContactItem({
    href,
    label,
    value,
    icon: Icon,
    targetBlank = false,
    lightBg = "bg-gray-100",
    lightText = "text-gray-700",
    darkBg = "bg-gray-800",
    darkText = "text-gray-300",
    hoverBg,
}: ContactItemProps) {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <a
            href={href}
            target={targetBlank ? "_blank" : undefined}
            rel={targetBlank ? "noopener noreferrer" : undefined}
            className={`group flex items-center gap-4 p-4 rounded-xl border transition-all ${darkMode ? "border-gray-800 hover:bg-gray-800" : "border-gray-100 hover:bg-blue-50"
                }`}
        >
            <div
                className={`h-11 w-11 rounded-full flex items-center justify-center transition-colors ${darkMode
                    ? `${darkBg} ${darkText} ${hoverBg ?? "group-hover:bg-gray-700 group-hover:text-white"}`
                    : `${lightBg} ${lightText} ${hoverBg ?? "group-hover:bg-blue-500 group-hover:text-white"}`
                    }`}
            >
                <Icon className="text-lg" />
            </div>

            <div>
                <p className={`text-xs uppercase tracking-wider opacity-60 font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {label}
                </p>
                <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {value}
                </p>
            </div>
        </a>
    );
}