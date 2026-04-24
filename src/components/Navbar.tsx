'use client';

import { cn } from '@/src/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  return (
    <div
      className={cn(
        'w-full mx-auto py-4 flex items-center justify-between px-4 sticky md:px-12 top-0',
      )}
    >
      <div className='flex items-center gap-x-2'>
        <div className=''>
          <h1 className='text-xs md:text-base'>BAGASSTR</h1>
        </div>
      </div>
      <Link
        href={'/'}
        className='border font-inter text-sm text-foreground/80 rounded-full px-3 py-1'
      >
        Let's Talk
      </Link>
    </div>
  );
};
export default Navbar;
