import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";

export const metadata: Metadata = {
  title: "Siva — Full Stack Developer | Projects & Education",
  description: "Siva's developer portfolio: React, Next.js, TypeScript, web projects, education, and freelance experience. Get in touch about software development opportunities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
