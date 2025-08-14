/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-13 13:59:19
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:40:23
 * @Description: to be added
 */
import { ReactNode } from 'react';

export default function SectionContainer({ children }: { children: ReactNode }) {
  return ( 
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      {children}
    </div>
  );
};
