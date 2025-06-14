import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const mainFont = IBM_Plex_Mono({
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
        className={`${mainFont.className} antialiased bg-[#0d1117] text-[#c9d1d9] min-h-screen`}
      >
        <div className="container max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-12">
          <Header />
          <main className="prose prose-invert prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-[#30363d] max-w-none">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}