import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import { cn } from '@/utils/cn';
import { buttonVariants } from './ui';

const Work = () => {
  return (
    <section className="flex min-h-[100vh] w-full flex-col justify-between bg-white sm:flex-row">
      <div className="flex w-full max-w-[600px] flex-col self-center pl-4 sm:w-1/2 md:pl-16 xl:ml-32">
        <h1 className="mb-8 text-4xl font-medium tracking-tight text-black">
          Developer Q&A Platform: Ask, Search, and earn Points & Medals based on
          your Activity
        </h1>
        <div className="mb-8 flex items-center gap-8">
          <Icons.DevOverflow className="size-20" />
          <h1 className="text-2xl font-medium text-black">Dev Overflow</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://dev-flow-self.vercel.app"
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-16 w-full rounded-none bg-transparent font-medium text-black',
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
              'h-16 w-full rounded-none bg-transparent font-medium text-black',
            )}
          >
            <Icons.GitHub className="mr-2 size-4" />
            <span>Github</span>
          </Link>
        </div>
      </div>

      {/* ICONS Section */}
      <div className="relative w-full overflow-hidden max-sm:flex-grow sm:w-1/2">
        <Image
          alt="portfolio project preview"
          src="/devoverflow-light-1.png"
          width={1920}
          height={1080}
          className="shadow-all-sides-2xl absolute left-14 top-10 z-30 rounded-sm object-cover"
        />
        <Image
          alt="portfolio project preview"
          src="/devoverflow-dark-2.png"
          width={1920}
          height={1080}
          className="absolute left-[15%] top-[22%] z-40 rounded-sm object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Work;
