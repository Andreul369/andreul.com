import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import { cn } from '@/utils/cn';
import { buttonVariants } from './ui';

const Work = () => {
  return (
    <section
      id="work"
      className="flex min-h-[100vh] w-full flex-col-reverse justify-between bg-white md:flex-row"
    >
      <div className="flex w-full flex-col self-center px-4 sm:w-1/2 xl:px-32">
        <h1 className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
          Developer Q&A Platform
        </h1>
        <h1 className="mb-8 text-2xl font-medium tracking-tight text-black sm:text-4xl">
          Ask, Search, and earn Points & Medals based on your Activity
        </h1>
        <div className="mb-8 flex items-center gap-8">
          <Icons.DevOverflow className="size-20" />
          <h1 className="text-2xl font-medium text-black">Dev Overflow</h1>
        </div>

        <div className="mb-8 flex flex-col items-center gap-2 lg:flex-row">
          <Link
            href="https://dev-flow-self.vercel.app"
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-16 w-full rounded-none bg-transparent text-base font-medium text-black',
            )}
          >
            <Icons.DemoLogo className="mr-2 size-4" />
            Demo
          </Link>
          <Link
            href="https://github.com/Andreul369/DevFlow"
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-16 w-full rounded-none bg-transparent text-base font-medium text-black',
            )}
          >
            <Icons.GitHub className="mr-2 size-4" />
            <span>Github</span>
          </Link>
        </div>
      </div>

      <div className="relative w-full grow overflow-x-clip md:w-1/2">
        <Image
          alt="portfolio project preview"
          src="/devoverflow-light-1.png"
          width={1920}
          height={1080}
          className="absolute left-[22%] top-[45%] z-30 -translate-y-1/2 scale-125 transform rounded-sm object-cover shadow-all-sides-2xl"
        />
        <Image
          alt="portfolio project preview"
          src="/devoverflow-dark-2.png"
          width={1920}
          height={1080}
          className="absolute left-[35%] top-[60%] z-40 -translate-y-1/2 scale-125 transform rounded-sm object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Work;
