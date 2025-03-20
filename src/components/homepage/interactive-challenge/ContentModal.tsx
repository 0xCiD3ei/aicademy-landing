'use client';

import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const ContentModal = ({
  content,
  ...props
}: HTMLAttributes<HTMLDivElement> & { content: string }) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute text-white rounded-xl lg:max-w-[240px] max-w-[180px] bg-[#484242] text-center sm:p-2 p-1',
        props.className
      )}
    >
      <p className='text-[12px] sm:text-base lg:text-2xl text-base w-fit inline-block sm:!font-medium'>
        {content}
      </p>
    </div>
  );
};
