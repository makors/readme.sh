import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

export const mainFont = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "readme.sh",
    template: "%s | readme.sh",
  },
  description: "a dev blog of sorts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mainFont.className} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <div className="container max-w-3xl mx-auto px-4 md:px-6 py-4 md:py-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}