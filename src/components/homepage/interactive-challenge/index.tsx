'use client';

import Carousel from 'react-multi-carousel';

import NextImage from '@/components/NextImage';

import Interactive1 from '@/assets/homepage/interactive-1.png';
import Interactive2 from '@/assets/homepage/interactive-2.png';
import { Fragment, HTMLProps, PropsWithChildren } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function InteractiveChallenge() {
  return (
    <div className='bg-faded py-20 md:px-[72px] px-5 overflow-visible'>
      <div className='flex justify-center w-full overflow-visible'>
        <div className='max-w-[1320px] w-full flex-1'>
          <div className='flex items-center justify-center lg:gap-[67px] md:gap-5 gap-5'>
            <div className='flex flex-col md:gap-6 lg:gap-10 gap-3 text-primary-foreground'>
              <h3 className='font-dela-gothic-one md:text-4xl lg:text-5xl text-3xl tracking-[1%] max-w-[480px]'>
                Interactive Challenges
              </h3>
              <p className='md:text-2xl text-lg tracking-[1%] lg:w-[70%] md:w-[90%] w-full'>
                Dive into hands-on lessons with real-time feedback, gamified
                challenges.
              </p>
            </div>
            <div className='md:flex items-end hidden'>
              <div className='flex flex-col mb-[120px] gap-2'>
                <div className='md:w-5 md:h-5 w-3 h-3 bg-black rounded-full' />
                <div className='md:w-5 md:h-5 w-3 h-3 bg-primary-foreground opacity-20 rounded-full' />
                <div className='md:w-5 md:h-5 w-3 h-3 bg-primary-foreground opacity-20 rounded-full' />
                <div className='md:w-5 md:h-5 w-3 h-3 bg-primary-foreground opacity-20 rounded-full' />
              </div>
              <div className='relative ml-16 w-max h-max'>
                <Image
                  alt='img-1'
                  src={Interactive1}
                  width={529}
                  height={698}
                  className='relative z-[1] max-w-[30dvw]'
                />
                <div className='absolute -top-10 -left-10'>
                  <Image
                    alt='img-1'
                    src={Interactive2}
                    width={529}
                    height={698}
                    className='max-w-[30dvw]'
                  />
                </div>
                {/* <div className='absolute inset-0 bg-black bg-opacity-40 rounded-[40px] h-[698px]' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-max mt-6 md:hidden block overflow-visible'>
        <ImageCarouselMobile />
      </div>
    </div>
  );
}

const ImageCarouselMobile = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <div className='overflow-visible'>
      <Carousel
        className='!overflow-visible'
        responsive={responsive}
        partialVisbile
        customButtonGroup={<ButtonGroup />}
        arrows={false}
      >
        {[
          Interactive1,
          Interactive2,
          Interactive2,
          Interactive2,
          Interactive2,
          Interactive2,
          Interactive2,
          Interactive2,
        ].map((img, index) => {
          return (
            <img
              key={index}
              alt='img-1'
              src={img.src}
              className='object-cover pr-3'
            />
          );
        })}
      </Carousel>
    </div>
  );
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className='carousel-button-group absolute -bottom-14 left-0 w-full flex items-center z-50 gap-2'>
      <Button
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      >
        Prev
      </Button>
      <div className='w-full h-[1px] bg-slate-300' />
      <Button onClick={() => next()}>Next</Button>
    </div>
  );
};

const Button = ({
  children,
  ...props
}: HTMLProps<HTMLButtonElement> & PropsWithChildren) => {
  return (
    <button
      {...(props as any)}
      className={cn(
        '@apply shadow-[2px_2px_0px_0px_#CACACA] rounded-lg p-2 flex justify-center items-center active:shadow-none transition-all duration-100 border-gray-50 bg-white',
        props.className
      )}
    >
      {children}
    </button>
  );
};
