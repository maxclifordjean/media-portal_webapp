'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Media Portal | Cliff Technologies',
//   description: 'Gestion de projets et services en mode collaboratif pour les projets medias.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex h-screen">
            {
              pathname != '/login' ? (
                <Sidebar />
              ):null
            }
            
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}