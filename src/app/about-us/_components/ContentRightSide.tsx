'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const contentList = [
  {
    title: 'WIMPY KID',
    subtitle: 'MAKING CHEESY COOL WITH AN ICONIC BOOK SERIES SHOWCASE.',
    content:
      'With over 275 million copies sold, 4 live-action and 2 animated films, the Diary of a Wimpy Kid series is a beloved franchise. We sat down with author and illustrator Jeff Kinney to help create an expansive website with the spirit of his series. Fans and parents loved our custom character designer and educational offerings. We loved making custom doodle animations, supported by vibrant colors, especially the yellow of the dreaded Cheese Touch. (Read the books!)',
    image:
      'https://images.unsplash.com/photo-1723584988482-346ef6505da6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'FROST KING',
    subtitle:
      'TRANSFORMING A SEASONAL PRODUCT INTO AN EVERGREEN CUSTOMER EXPERIENCE.',
    content:
      'With over 275 million copies sold, 4 live-action and 2 animated films, the Diary of a Wimpy Kid series is a beloved franchise. We sat down with author and illustrator Jeff Kinney to help create an expansive website with the spirit of his series. Fans and parents loved our custom character designer and educational offerings. We loved making custom doodle animations, supported by vibrant colors, especially the yellow of the dreaded Cheese Touch. (Read the books!)',
    image:
      'https://images.unsplash.com/photo-1731891593402-b765eee0034e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'ANOTHER PROJECT',
    subtitle: 'A NEW ERA OF DIGITAL EXPERIENCE.',
    content:
      'With over 275 million copies sold, 4 live-action and 2 animated films, the Diary of a Wimpy Kid series is a beloved franchise. We sat down with author and illustrator Jeff Kinney to help create an expansive website with the spirit of his series. Fans and parents loved our custom character designer and educational offerings. We loved making custom doodle animations, supported by vibrant colors, especially the yellow of the dreaded Cheese Touch. (Read the books!)',
    image:
      'https://images.unsplash.com/photo-1741540420894-46bc55554fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const ContentRightSide = () => {
  const [currentContent, setCurrentContent] = useState(0);

  return (
    <div>
      <div className='flex justify-between w-full'>
        <div className='relative w-[60%] flex-1 flex justify-center'>
          <img
            src={contentList[currentContent].image}
            className='w-[600px] h-[70dvh] rounded-[100px] object-cover sticky top-[150px]'
            alt='f'
          />
        </div>
        <div className='relative flex flex-col gap-28 w-[40%] py-36'>
          {contentList.map((item, index) => (
            <ContentItem
              key={index}
              index={index}
              {...item}
              setCurrentContent={setCurrentContent}
              currentContent={currentContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ContentItem = ({
  title,
  subtitle,
  content,
  index,
  setCurrentContent,
  image,
  currentContent,
}: {
  title: string;
  subtitle: string;
  content: string;
  index: number;
  image: string;
  currentContent: number;
  setCurrentContent: (index: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const middleScreen = viewportHeight / 2;
        const distance = Math.abs(rect.top + rect.height / 2 - middleScreen);

        const maxDistance = viewportHeight / 3;
        const normalized = Math.max(0, 1 - distance / maxDistance);

        setOpacity(0.2 + normalized * 0.5);

        if (normalized > 0.5) {
          setCurrentContent(index);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex-1 flex justify-between items-center gap-5 relative'>
      {/* {currentContent === index && (
        <img
          src={image}
          alt=''
          className='absolute opacity-40 top-1/2 -translate-y-1/2 left-[-720px] rounded-[100px] w-[600px] h-[70dvh]'
        />
      )} */}
      <div
        ref={ref}
        className=' flex flex-col gap-4 transition-all duration-300'
        style={{
          opacity: opacity,
          // transform: `scale(${scale})`,
          transition:
            'opacity 0.12s ease, transform 0.12s ease, font-weight 0.12s ease',
        }}
      >
        <p className='text-2xl uppercase tracking-wide font-medium'>{title}</p>
        <p className='text-3xl leading-tight font-medium'>{subtitle}</p>
        <p className='text-base max-w-2xl'>{content}</p>
      </div>
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
