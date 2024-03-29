import { Providers } from '@/context/providers';

import { siteConfig } from '@/config/site';
import { fonts } from '@/lib/fonts';

import '@/styles/custom.css';
import '@/styles/globals.css';
import { cn } from '@sohanemon/utils';
import { Analytics } from '@vercel/analytics/react';

export const metadata = siteConfig.metadata;
export const viewport = siteConfig.viewport;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html suppressHydrationWarning className="default scroll-pt-16" lang="en">
        <head />
        <body
          className={cn('flex min-h-screen flex-col font-sans', fonts)}
          dir="rtl"
        >
          <Providers>{children}</Providers>
          <Analytics />
        </body>
      </html>
    </>
  );
}
