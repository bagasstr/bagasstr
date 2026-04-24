'use client';

import { cn } from '@/src/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <div
      className={cn(
        'w-full mx-auto py-4 flex items-center justify-between z-50 px-4 sticky md:px-12 top-0',
      )}
    >
      <div className='flex items-center gap-x-2'>
        <div className=''>
          <h1 className='text-xs md:text-base'>BAGASSTR</h1>
        </div>
      </div>
      <div className='flex items-center gap-x-2'>
        <ThemeToggle />
        <Link
          href={'mailto:bagassatrio2805@gmail.com'}
          className='border font-inter text-sm text-foreground/80 rounded-full px-3 py-1'
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
