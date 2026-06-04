import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Harshit Singh | LLM & Full-Stack Engineer",
  description:
    "Harshit Singh builds intelligent, scalable software, from production web apps to LLM post-training pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
