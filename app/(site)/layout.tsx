import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric LaDelpha",
  description: "Artwork by Eric LaDelpha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="font-sans">
      <body className={inter.className}>
        <header>
        <Navbar />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-evenly p-24  bg-neutral-300">{children}</main>
      </body>
    </html>
  );
}
