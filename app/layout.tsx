'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Loader } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  // Routes that don't require authentication
  const publicRoutes = ['/login', '/auth'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // Show loading while checking authentication
  if (!isPublicRoute && isLoading) {
    return (
      <html lang="fr" suppressHydrationWarning>
        <body className={inter.className}>
          <div className="flex items-center justify-center h-screen bg-[#faf9f6]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8f1724]" />
              <p className="mt-4 text-gray-600">Chargement...</p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex h-screen">
            {!isPublicRoute && isAuthenticated && pathname !== '/login' ? (
              <Sidebar />
            ) : null}

            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}