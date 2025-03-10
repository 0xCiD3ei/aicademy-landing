'use client';

import Footer from '@/components/homepage/footer';
import Header from '@/components/homepage/header';

import Section1 from '@/components/homepage/section-1';
import Section2 from '@/components/homepage/section-2';
import Section3 from '@/components/homepage/section-3';
import Section4 from 'src/components/homepage/section-4';


export default function HomePage() {
  return (
    <main>
      <Header />
      <div className='main'>
        <Section1 />
        <Section2 />
        <Section3 /> 
        <Section4 />
      </div>
      <Footer />
    </main>
  );
}
