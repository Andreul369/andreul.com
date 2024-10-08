import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

// import { GeistMono } from 'geist/font/mono';
import './globals.css';

import Footer from '@/components/footer';
import MobileNav from '@/components/mobile-nav';
import NavBar from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui';

export const metadata: Metadata = {
  title: 'andreul.com',
  description: 'andreul.com personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen antialiased">
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex flex-col items-center justify-center">
            <NavBar />

            {/* <div className="flex w-full max-w-6xl items-center justify-center pt-4">
              <p className="text-2xl">{`<andreul />`}</p>
            </div> */}
            {/* <MobileNav /> */}

            <main className="flex min-h-screen w-full flex-col items-center">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
