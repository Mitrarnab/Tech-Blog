import "./globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "../providers/provider";

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Latest technical articles on frontend, backend, and web development.",

  openGraph: {
    title: "Tech Blog",
    description: "Latest technical articles on frontend, backend, and web development.",
    url: "https://techblogbyarnab.vercel.app/",
    siteName: "Tech Blog",
    images: [
      {
        url: "https://techblogbyarnab.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Blog - Modern Tech Insights",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Blog",
    description: "Latest technical articles on frontend, backend, and web development.",
    images: ["https://techblogbyarnab.vercel.app/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
