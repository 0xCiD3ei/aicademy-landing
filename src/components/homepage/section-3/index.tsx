import NextImage from '@/components/NextImage';

import Img1 from '@/assets/homepage/section3-1.png';
import Img2 from '@/assets/homepage/section3-2.png';

export default function Section3() {
  return (
    <div className='mb-20'>
      <div className='flex items-center justify-center my-[158px]'>
        <NextImage alt='img-1' src={Img1} width={622} height={433} />
        <div className='flex flex-col text-primary-foreground'>
          <h3 className='font-dela-gothic-one text-5xl tracking-[1%] capitalize w-[313px]'>
            Ultimate motivation
          </h3>
          <p className='mt-10 w-[520px] text-2xl tracking-[1%]'>
            Give badges, unlock achievements, and earn blockchain-verified NFT
            Certificates
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='bg-secondary w-full max-w-[1320px] h-[1080px] rounded-[40px] py-[64px] px-[89px] font-dela-gothic-one'>
          <h3 className='text-primary-foreground text-center text-2xl font-bold tracking-[2%] '>
            What do you do in{' '}
            <span className='text-[80px] leading-[120%]'>aicademy ?</span>
          </h3>
          <div className='mt-[90px]'>
            <NextImage alt='img-2' src={Img2} width={1142.79} height={696.88} />
          </div>
        </div>
      </div>
    </div>
  );
}
