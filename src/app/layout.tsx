import "./globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "./providers/provider";


export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Latest technical articles on frontend, backend, and web development.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
