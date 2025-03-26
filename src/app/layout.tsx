import type { Metadata } from "next";
import "./globals.css";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sheryians Coding School | Learn Coding in India",
  description: "Learn how to build modern websites with animations, explore awwwards-winning or award-winning websites, and courses on website creation. Master web technologies like Node.js, MongoDB, Socket.io, and databases such as DBMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MarqueeBanner />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
