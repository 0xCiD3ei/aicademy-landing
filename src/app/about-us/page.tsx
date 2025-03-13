'use client';

import { motion, useScroll } from 'framer-motion';
import ReactLenis from 'lenis/dist/lenis-react';

import { ContentRightSide } from '@/app/about-us/_components/ContentRightSide';

export default function AboutUsPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className='bg-[#E7FCFE] py-[500px]'>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.01,
          syncTouch: true,
        }}
      >
        <motion.div className='w-full flex justify-between px-[200px]'>
          {/* <div>image content</div> */}
          <div className='flex-1'>
            <ContentRightSide />
          </div>
        </motion.div>
      </ReactLenis>
    </div>
  );
}
