'use client';

import { motion, useAnimation, useInView, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import RoadIcon from '@/components/homepage/roadmap/RoadIcon';
import Img1 from '@/assets/homepage/section3-1.png';
import Img2 from '@/assets/homepage/section3-2.png';
import {
  LandmarkNumberFour,
  LandmarkNumberOne,
  LandmarkNumberThree,
  LandmarkNumberTwo,
} from './Landmark';
import { ContentModal } from '../interactive-challenge/ContentModal';

export default function Section3() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex lg:flex-row flex-col justify-center items-center gap-2 md:my-20 my-10 md:max-w-[1320px]'>
          <img
            alt='img-1'
            src={Img1.src}
            width={722}
            height={433}
            className='object-cover h-auto flex-1'
          />
          <div className='flex flex-col text-primary-foreground lg:text-left text-center lg:gap-6 gap-3 lg:w-[50%] flex-1'>
            <h3 className='font-dela-gothic-one lg:text-5xl text-3xl text-center lg:text-left tracking-[1%] capitalize lg:max-w-[313px] block'>
              Ultimate motivation
            </h3>
            <p className='max-w-max lg:text-2xl text-lg tracking-[1%] inline'>
              Give badges, unlock achievements, and earn blockchain-verified NFT
              Certificates
            </p>
          </div>
        </div>
      </div>
      <div className='relative w-full my-8'>
        <div className='flex justify-center'>
          <div className='bg-secondary w-full md:max-w-[1320px] max-w-max rounded-[40px] md:py-[64px] py-[30px] font-dela-gothic-one flex flex-col gap-5'>
            <h3 className='text-primary-foreground text-center text-2xl font-bold tracking-[2%] sm:px-[89px]'>
              What do you do in{' '}
              <span className='sm:text-[80px] text-5xl leading-[120%] block sm:inline'>
                aicademy ?
              </span>
            </h3>
            <CenterImage />
          </div>
        </div>
      </div>
    </>
  );
}

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const CenterImage = () => {
  const [state, setState] = useState({
    hasScaled: false,
    showLevel1: false,
    showLevel2: false,
    showLevel3: false,
    showLevel4: false,
    showScrollbar: true,
  });

  const ref = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLImageElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { margin: '100px' });

  const { width = 0, height = 0 } = useResizeObserver({
    ref: roadRef,
    box: 'border-box',
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 80vh'],
  });

  const checkIfCenter = useCallback(() => {
    if (!roadRef.current || state.showLevel4) return;

    const rect = roadRef.current.getBoundingClientRect();
    const viewportCenterY = window.innerHeight / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const isYCenter = Math.abs(elementCenterY - viewportCenterY) < 10;

    if (isYCenter) {
      setState((prev) => ({ ...prev, showScrollbar: true }));
    }
  }, [state.showLevel4]);

  useEffect(() => {
    if (state.showLevel4) return;

    checkIfCenter();
    window.addEventListener('resize', checkIfCenter);
    window.addEventListener('scroll', checkIfCenter);

    return () => {
      window.removeEventListener('resize', checkIfCenter);
      window.removeEventListener('scroll', checkIfCenter);
    };
  }, [checkIfCenter, state.showLevel4]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 1 && !state.hasScaled) {
        setState((prev) => ({ ...prev, hasScaled: true }));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, state.hasScaled]);

  useEffect(() => {
    if (inView) {
      console.log('inside');
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      if (state.showLevel4) return;
      const target = e.currentTarget;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollTop / scrollHeight;

      setState((prev) => ({ ...prev, hasScaled: true }));

      if (progress >= 0.1 && !state.showLevel1) {
        setState((prev) => ({ ...prev, showLevel1: true }));
      }
      if (progress >= 0.5 && !state.showLevel2) {
        setState((prev) => ({ ...prev, showLevel2: true }));
      }
      if (progress >= 0.7 && !state.showLevel3) {
        setState((prev) => ({ ...prev, showLevel3: true }));
      }
      if (progress >= 0.9) {
        setState((prev) => ({ ...prev, showScrollbar: false }));
        setTimeout(
          () => setState((prev) => ({ ...prev, showLevel4: true })),
          100
        );
      }
    },
    [state.showLevel4, state.showLevel1, state.showLevel2, state.showLevel3]
  );

  const roadIconColors = useMemo(
    () => ({
      level1: state.showLevel1 ? '#0081BC' : '',
      level2: state.showLevel2 ? '#00BD9C' : '',
      level3: state.showLevel3 ? '#FFC500' : '',
      level4: state.showLevel4 ? '#FF4B38' : '',
    }),
    [state.showLevel1, state.showLevel2, state.showLevel3, state.showLevel4]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        height: `${height + (width < 400 ? 120 : 80)}px`,
        paddingBlock: `${width < 400 ? 70 : 10}px`,
      }}
      onScroll={handleScroll}
      className={cn(
        'w-full overflow-auto no-scrollbar md:pt-0',
        state.showLevel4 && 'overflow-y-hidden'
      )}
    >
      <div className='sticky top-0 w-full flex justify-center'>
        <motion.div
          className='relative h-max'
          ref={roadRef}
          initial='hidden'
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 0 },
          }}
          animate={controls}
        >
          <motion.img
            alt='img-2'
            src={Img2.src}
            className='w-full h-auto object-cover'
          />
          <div className='absolute top-[70%] left-[55%] -translate-y-1/2 -translate-x-1/2'>
            <RoadIcon color={roadIconColors} />
            {state.showLevel1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <ContentModal
                  content='Choose a Course'
                  className='lg:-top-32 z-50 lg:-left-20 animate-float-ease md:-left-[30%] md:w-[150px] md:-top-[15%]'
                />
                <LandmarkNumberOne
                  color={state.showLevel1 ? '#0081BC' : ''}
                  className={`absolute lg:-top-30 lg:left-20
                  -top-[70%] left-[10%] sm:-top-[40%] sm:left-[8%] sm:w-[80px] -translate-x-1/4 
                  -translate-y-1/4 animate-float-ease lg:w-max w-[60px]
                  md:left-[8%] md:w-[90px] md:-top-[28%]
                  `}
                />
              </motion.div>
            )}
            {state.showLevel2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <ContentModal
                  content='Learn with AI mentor'
                  className='lg:top-20 lg:-right-56 top-20 -right-40 animate-float-ease'
                />
                <LandmarkNumberTwo
                  color={state.showLevel2 ? '#00BD9C' : ''}
                  className={`absolute lg:-top-14 lg:right-0 -translate-x-1/4 -translate-y-1/4
                  -top-[50%] -right-[0%] w-[70px] lg:w-max sm:-top-[28%] sm:right-[0%] sm:w-[80px]
                  md:-top-[18%] md:right-[0%] md:w-[90px]
                  animate-float-ease`}
                />
              </motion.div>
            )}
            {state.showLevel3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <ContentModal
                  content='Complete Exercises'
                  className='lg:bottom-80 lg:-left-72 animate-float-ease md:bottom-60 md:-left-36 '
                />
                <LandmarkNumberThree
                  color={state.showLevel3 ? '#FFC500' : ''}
                  className={`absolute lg:bottom-64 lg:-left-10 lg:w-max -translate-y-1/3 -translate-x-1/3 animate-float-ease
                  bottom-[16%] left-[1%] w-[70px] sm:w-[80px] sm:bottom-[30%] sm:left-[15%]
                  md:bottom-[40%] md:left-[10%] md:w-[90px]`}
                />
              </motion.div>
            )}
            {state.showLevel4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <ContentModal
                  content='Earn Blockchain Certificates'
                  className='lg:bottom-5 lg:-right-40 md:bottom-[20%] md:-right-[30%] animate-float-ease'
                />
                <LandmarkNumberFour
                  color={state.showLevel4 ? '#FF4B38' : ''}
                  className={`absolute lg:bottom-20 lg:right-10 lg:w-max -translate-y-1/3 -translate-x-1/3 animate-float-ease
                  -bottom-[20%] right-[20%] w-[70px] sm:w-[80px] sm:-bottom-[10%] sm:right-[20%]
                  md:bottom-[1%] md:right-[20%] md:w-[90px]
                `}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      {state.showScrollbar && <div className='h-[160dvh] w-ful'></div>}
    </motion.div>
  );
};

const LandmarkComponent = ({
  level,
  color,
}: {
  level: number;
  color: string;
}) => {
  const Landmark = [
    LandmarkNumberOne,
    LandmarkNumberTwo,
    LandmarkNumberThree,
    LandmarkNumberFour,
  ][level - 1];
  const content = [
    'Choose a Course',
    'Learn with AI mentor',
    'Complete Exercises',
    'Earn Blockchain Certificates',
  ][level - 1];

  const className = [
    'lg:-top-32 z-50 lg:-left-20 animate-float-ease md:-left-[30%] md:w-[150px] md:-top-[15%]',
    'lg:top-20 lg:-right-56 top-20 -right-40 animate-float-ease',
    'lg:bottom-80 lg:-left-72 animate-float-ease md:bottom-60 md:-left-36',
    'lg:bottom-5 lg:-right-40 md:bottom-[20%] md:-right-[30%] animate-float-ease',
  ][level - 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <ContentModal content={content} className={className} />
      <Landmark color={color} className={className} />
    </motion.div>
  );
};
