import NextImage from '@/components/NextImage';

import Img1 from '@/assets/homepage/section2-1.png';

export default function Section2() {
  return (
    <div className='bg-secondary py-20 px-[72px] flex justify-center'>
      <div className='max-w-[1320px] w-full'>
        <div className='flex items-center justify-center gap-[67px] '>
          <div className='flex flex-col gap-10 text-primary-foreground'>
            <h3 className='font-dela-gothic-one text-5xl tracking-[1%] w-[480px]'>
              Interactive Challenges
            </h3>
            <p className='text-2xl tracking-[1%] w-[506px]'>
              Dive into hands-on lessons with real-time feedback, gamified
              challenges.
            </p>
          </div>
          <div className='flex items-end '>
            <div className='flex flex-col mb-[120px] gap-2'>
              <div className='w-7 h-7 bg-black rounded-full' />
              <div className='w-7 h-7 bg-primary-foreground opacity-20 rounded-full' />
              <div className='w-7 h-7 bg-primary-foreground opacity-20 rounded-full' />
              <div className='w-7 h-7 bg-primary-foreground opacity-20 rounded-full' />
            </div>
            <div className='relative ml-16'>
              <NextImage
                alt='img-1'
                src={Img1}
                width={529}
                height={698}
                className='relative z-[1]'
              />
              <div className='absolute -top-10 -left-10'>
                <NextImage alt='img-1' src={Img1} width={529} height={698} />
                <div className='absolute inset-0 bg-black bg-opacity-40 rounded-[40px] h-[698px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
