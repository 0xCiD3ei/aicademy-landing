import NextImage from '@/components/NextImage';

import Img2 from '@/assets/homepage/section4-2.png';
import Img3 from '@/assets/homepage/section4-3.png';
import Img4 from '@/assets/homepage/section4-4.png';
import Img5 from '@/assets/homepage/section4-5.png';
import Img6 from '@/assets/homepage/section4-6.png';
import Img7 from '@/assets/homepage/section4-7.gif';

export default function Section4() {
  return (
    <div className='bg-secondary rounded-ss-[100px] rounded-se-[100px] py-20 px-[72px] flex items-center justify-center flex-col'>
      <h2 className='font-dela-gothic-one text-primary-foreground text-[54px] leading-[64.8px] text-center'>
        Equip yourselves with AI Skills today!
      </h2>
      <div className='mt-10 grid grid-cols-2'>
        <div className='flex items-center flex-col gap-6'>
          <div className='w-[658px] h-[408px] rounded-[20px]'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full rounded-[20px]'
            >
              <source src='./videos/section4-1.mp4' type='video/mp4' />
            </video>
          </div>

          <div className='flex items-center justify-center gap-6'>
            <NextImage alt='img-2' src={Img2} width={317} height={412} />
            <div className='flex items-center justify-center flex-col gap-6'>
              <NextImage alt='img-3' src={Img3} width={312} height={108} />
              <NextImage alt='img-4' src={Img4} width={312} height={263} />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end flex-col gap-6'>
          <div className='flex items-end justify-center gap-6 '>
            <NextImage alt='img-5' src={Img5} width={312} height={408} />
            <div className='flex justify-center flex-col gap-6'>
              <NextImage alt='img-6' src={Img6} width={263} height={168} />
              <div className='rounded-[20px] border border-[#D9D9D9]'>
                <NextImage
                  alt='img-7'
                  src={Img7}
                  width={263}
                  height={236}
                  classNames={{
                    image: 'rounded-[20px]',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='w-[611px] h-[345.7px] rounded-[20px]'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full rounded-[20px]'
            >
              <source src='./videos/section4-8.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
