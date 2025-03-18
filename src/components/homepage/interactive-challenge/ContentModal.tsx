'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const ContentModal = ({
  content,
  ...props
}: HTMLAttributes<HTMLDivElement> & { content: string }) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute text-white rounded-xl lg:max-w-[240px] max-w-[180px] md:inline hidden bg-[#484242] text-center p-2',
        props.className
      )}
    >
      <p className=' sm:text-base lg:text-2xl text-base w-fit inline-block sm:!font-medium'>
        {content}
      </p>
    </div>
  );
};
