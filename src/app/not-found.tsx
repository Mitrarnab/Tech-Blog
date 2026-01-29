import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm">

                <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full flex items-center justify-center 
                          bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <TbFaceIdError className="text-3xl" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    404
                </h1>

                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                    Page not found
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-900"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
