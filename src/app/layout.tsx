import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import nextimg from '../../public/next.svg'
import List from "./components/List";
import LeftSide from "./components/LeftSide";
import LeftNav from "./components/LeftNav";
import ContextProvider from "./hooks/context/provider/ContextProvider";

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
        <ContextProvider>

          <main className="flex min-h-screen">
            <LeftNav />
            {/* left side ends  */}
            {/* content starts  */}
            <section className="grow">
              {children}
            </section>
          </main>
        </ContextProvider>

      </body>
    </html>
  );
}
