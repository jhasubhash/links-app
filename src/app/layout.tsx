import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Links - Beautiful Bookmark Manager for macOS",
  description: "A beautiful, native macOS bookmark manager with lightning-fast search, quick save from any browser, and seamless iCloud sync.",
  keywords: ["bookmark manager", "macOS", "bookmarks", "Safari", "Chrome", "Arc", "productivity"],
  authors: [{ name: "Subhash Jha" }],
  openGraph: {
    title: "Links - Beautiful Bookmark Manager for macOS",
    description: "A beautiful, native macOS bookmark manager with lightning-fast search, quick save from any browser, and seamless iCloud sync.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
