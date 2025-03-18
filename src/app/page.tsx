'use client';

import dynamic from 'next/dynamic';
import Section4 from 'src/components/homepage/section-4';

import Footer from '@/components/homepage/footer';
import Header from '@/components/homepage/header';
import Section1 from '@/components/homepage/section-1';

const InteractiveChallenge = dynamic(() => import('@/components/homepage/interactive-challenge'), { ssr: false });
const RoadMap = dynamic(() => import('@/components/homepage/roadmap'), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <Header />
      <div>
        <Section1 />
        <InteractiveChallenge />
        <RoadMap />
        <Section4 />
      </div>
      <Footer />
    </main>
  );
}
