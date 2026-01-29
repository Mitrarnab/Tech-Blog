"use client";

import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm">

                <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-500">
                        <BiErrorCircle className="text-3xl" />
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Something went wrong
                </h1>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    An unexpected error occurred. Please try again or refresh the page.
                </p>

                <button
                    onClick={reset}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-900"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
