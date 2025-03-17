'use client';

import Section4 from 'src/components/homepage/section-4';

import Footer from '@/components/homepage/footer';
import Header from '@/components/homepage/header';
import InteractiveChallenge from '@/components/homepage/interactive-challenge';
import Section1 from '@/components/homepage/section-1';
import Section3 from '@/components/homepage/roadmap';

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className='main'>
        <Section1 />
        <InteractiveChallenge />
        <Section3 />
        <Section4 />
      </div>
      <Footer />
    </main>
  );
}
