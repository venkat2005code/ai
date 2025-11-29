import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Monet | Revenue intelligence workspace",
  description:
    "A polished Next.js experience that mirrors a modern AI SaaS marketing site with shared layouts and animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 bg-background">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
