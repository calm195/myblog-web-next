/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-07-24 14:08:37
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-13 14:16:11
 * @Description: to be added
 */
import type { Metadata } from "next";
import "@/css/tailwind.css";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProviders } from "./theme-providers";
import SectionContainer from "@/components/SectionContainer";

export const metadata: Metadata = {
  title: "kurous",
  description: "kurous's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "bg-white text-black antialiased dark:bg-dark dark:text-soto-400">
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
       </ThemeProviders>
     </body>
    </html>
  );
}
