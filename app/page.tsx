"use client"; // This is a client component 👈🏽
import Header from '../components/Header/Header'
import { trackFbPageView } from '@/lib/fb';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    trackFbPageView();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main-blue">
      <Header />
    </main>
  )
}
