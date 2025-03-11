import Banner from '@/components/homepage/header/Banner';

import Logo from '@/assets/homepage/logo.svg';

export default function Header() {
  return (
    <>
      <header className='mt-5 px-[72px] w-full h-[92px] flex items-center justify-center'>
        <div className='bg-secondary px-5 rounded-xl flex items-center justify-between h-full w-full'>
          <div>
            <Logo className='w-[220px] h-[52px]' />
          </div>
          <div className='cursor-pointer text-base text-white font-semibold bg-primary rounded-lg px-[29px] py-2.5 drop-shadow-[3px_3px_0px_rgba(198,198,198,1)] hover:bg-btn-hover'>
            Login
          </div>
        </div>
      </header>
      <div className='mt-[50px] mb-12'>
        <Banner />
      </div>
    </>
  );
}
