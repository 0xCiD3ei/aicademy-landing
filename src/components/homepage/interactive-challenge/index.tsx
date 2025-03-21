'use client';

import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HTMLProps, PropsWithChildren, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { cn } from '@/lib/utils';

import Interactive1 from '@/assets/homepage/interactive-1.png';
import Interactive2 from '@/assets/homepage/interactive-2.png';

const images = [Interactive1, Interactive2, Interactive1, Interactive2];
export default function InteractiveChallenge() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('hidden');
    setTimeout(() => controls.start('visible'), 200);
  }, [selectedIndex]);

  return (
    <div className='bg-faded py-10 md:px-[72px] px-5 overflow-visible lg:py-20'>
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
            <div className='lg:flex items-end hidden'>
              <div className='flex flex-col mb-[120px] gap-2'>
                {images.map((_, index) => (
                  <div
                    className={cn(
                      'md:w-5 md:h-5 w-3 h-3 rounded-full cursor-pointer',
                      selectedIndex === index
                        ? 'bg-primary-foreground'
                        : 'bg-primary-foreground opacity-20'
                    )}
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
              <div className='relative ml-16 w-max h-[70dvh]'>
                {selectedIndex > -1 && (
                  <motion.img
                    alt='img-1'
                    src={images[selectedIndex].src}
                    width={529}
                    height={698}
                    className='relative z-[1] max-w-[30dvw] h-full object-cover rounded-[40px]'
                    style={{
                      transformOrigin: 'top center',
                    }}
                    variants={{
                      hidden: {
                        y: -40, // Bắt đầu từ vị trí trên cùng (ngoài màn hình)
                        opacity: 0, // Ẩn phần tử
                      },
                      visible: {
                        y: 0, // Di chuyển đến vị trí gốc
                        opacity: 1, // Hiển thị phần tử
                        transition: {
                          type: 'tween', // Sử dụng tween để kiểm soát thời gian
                          duration: 0.5, // Thời gian animation
                          ease: 'easeOut', // Hiệu ứng easing
                        },
                      },
                    }}
                    animate={controls}
                  />
                )}
                <div className='absolute -top-10 -left-10 h-full'>
                  <motion.img
                    alt='img-1'
                    src={
                      images[
                        selectedIndex - 1 < 0
                          ? images.length - 1
                          : selectedIndex - 1
                      ].src
                    }
                    width={529}
                    height={698}
                    className='max-w-[30dvw] h-full'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-40 rounded-[40px] h-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 lg:hidden block'>
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
    <div className='relative'>
      <Carousel
        containerClass='container'
        responsive={responsive}
        partialVisbile
        customButtonGroup={<ButtonGroup />}
        arrows={false}
      >
        {images.map((img, index) => {
          return (
            <img
              key={index}
              alt='img-1'
              src={img.src}
              className='object-cover pr-3 pb-14'
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
    <div className='carousel-button-group  absolute bottom-1 left-0 w-[99%] flex items-center z-50 gap-2'>
      <Button
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      >
        <ChevronLeft />
      </Button>
      <div className='w-full h-[1px] bg-slate-300' />
      <Button onClick={() => next()}>
        <ChevronRight />
      </Button>
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
