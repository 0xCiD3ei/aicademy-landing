'use client';

import dynamic from 'next/dynamic';
// import Skills from 'src/components/homepage/skills';

const Header = dynamic(() => import('@/components/homepage/header'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/homepage/footer'), {
  ssr: false,
});
const Reason = dynamic(() => import('@/components/homepage/reason'), {
  ssr: false,
});
const InteractiveChallenge = dynamic(
  () => import('@/components/homepage/interactive-challenge'),
  { ssr: false }
);
const RoadMap = dynamic(() => import('@/components/homepage/roadmap'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <Header />
      <div>
        <Reason />
        <InteractiveChallenge />
        <RoadMap />
        {/*<Skills />*/}
      </div>
      <Footer />
    </main>
  );
}
