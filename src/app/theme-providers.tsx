/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-13 13:57:06
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:36:43
 * @Description: to be added
 */
'use client';

import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';
import React from 'react';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  );
};