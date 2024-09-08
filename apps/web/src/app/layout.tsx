import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Главная страница',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body style={inter.style}>{children}</body>
    </html>
  );
}
