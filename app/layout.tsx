import { trackFbPageView } from '@/lib/fb';
import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Swoony lahjakortit',
  description: '',
  verification: {
    other: {
      'facebook-domain-verification': '7j6x7vplfes8m21zio81nrick5jvk1',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      trackFbPageView();
    });
  }, [router.events]);

  return (
    <html lang="en">
      <body className={jakartaSans.className}>{children}</body>
    </html>
  )
}
