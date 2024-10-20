import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import nextimg from '../../public/next.svg'
import List from "./components/List";
import LeftSide from "./components/LeftSide";
import LeftNav from "./components/LeftNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <LeftNav />
          {/* left side ends  */}
          {/* content starts  */}
          <section className="grow">
            {children}
          </section>
        </main>

      </body>
    </html>
  );
}