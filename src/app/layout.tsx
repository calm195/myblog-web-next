/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-07-24 14:08:37
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-22 16:44:57
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
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <body className = "bg-white text-black antialiased dark:bg-dark dark:text-soto-400">
        {/* Fixed background layer. Replace the image at public/static/images/bg.jpg or change the --site-bg-image CSS variable in src/css/tailwind.css */}
        <div className="fixed inset-0 -z-10 site-bg" aria-hidden="true" />
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
