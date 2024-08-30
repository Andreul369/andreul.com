import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as Icons from '@/components/icons';

const Work = () => {
  return (
    <section className="flex min-h-[80vh] w-full flex-col justify-between bg-black sm:flex-row">
      <div className="flex w-full max-w-[600px] flex-col self-center pl-4 sm:w-1/2 md:pl-16 xl:ml-32">
        <h1 className="mb-8 text-4xl font-medium tracking-tight">
          Developer Q&A Platform: Ask, Search, and earn Points & Medals based on
          your Activity
        </h1>
        <div className="mb-8 flex items-center gap-8">
          <Icons.DevOverflow className="size-20" />
          <h1 className="text-2xl">Dev Overflow</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://dev-flow-self.vercel.app"
            target="_blank"
            className="flex items-center rounded-none border border-input bg-transparent  px-4 py-2 hover:bg-accent hover:text-accent-foreground"
          >
            <Icons.LaptopMinimal className="mr-2 size-4" />
            Demo
          </Link>
          <Link
            href="https://github.com/Andreul369/DevFlow"
            target="_blank"
            className="flex items-center rounded-none border border-input bg-transparent  px-4 py-2 hover:bg-accent hover:text-accent-foreground"
          >
            <Icons.GitHub className="mr-2 size-4" />
            <span>Github</span>
          </Link>
        </div>
      </div>

      {/* ICONS Section */}
      <div className="relative w-full max-sm:flex-grow sm:w-1/2">
        <Image
          alt="portfolio project preview"
          src="/hh-cms-3.webp"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Work;
