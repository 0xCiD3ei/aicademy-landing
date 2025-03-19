import Img2 from '@/assets/homepage/section4-2.png';
import Img3 from '@/assets/homepage/section4-3.png';
import Img4 from '@/assets/homepage/section4-4.png';
import Img5 from '@/assets/homepage/section4-5.png';
import Img6 from '@/assets/homepage/section4-6.png';
import Img7 from '@/assets/homepage/section4-7.gif';

export default function Section4() {
  return (
    <div className='bg-secondary rounded-none xl:rounded-ss-[100px] xl:rounded-se-[100px] p-5 md:py-10 md:px-10 xl:py-20 xl:px-[72px] flex items-center justify-center flex-col'>
      <h2 className='font-dela-gothic-one text-primary-foreground text-[32px] md:text-[48px] xl:text-[54px] leading-[120%] xl:text-center'>
        Equip yourselves with AI Skills today!
      </h2>
      <div className='mt-5 md:mt-8 xl:mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-0'>
        <div className='flex items-center flex-col gap-6'>
          <div className='w-full h-full xl:w-[658px] xl:h-[408px] rounded-[20px]'>
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

          <div className='flex items-center justify-center flex-col md:flex-row gap-6'>
            <img alt='img-2' src={Img2.src} width={317} height={412} />
            <div className='flex items-center justify-center flex-col gap-6'>
              <img alt='img-3' src={Img3.src} width={312} height={108} />
              <img alt='img-4' src={Img4.src} width={312} height={263} />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end flex-col gap-6'>
          <div className='flex items-center md:items-end justify-center flex-col md:flex-row gap-6 '>
            <img alt='img-5' src={Img5.src} width={312} height={408} />
            <div className='flex justify-center flex-col gap-6'>
              <img alt='img-6' src={Img6.src} width={263} height={168} />
              <div className='rounded-[20px] border border-[#D9D9D9]'>
                <img
                  alt='img-7'
                  src={Img7.src}
                  width={263}
                  height={236}
                  className='rounded-[20px]'
                />
              </div>
            </div>
          </div>
          <div className='w-full h-full xl:w-[611px] xl:h-[345.7px] rounded-[20px]'>
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
