import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import { buttonVariants } from '@/components/ui';
import { cn } from '@/utils/cn';

const HomeBanner = () => {
  return (
    <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-b from-transparent from-0% via-transparent via-0% to-black to-100% px-4 py-20 md:px-16 lg:flex-row xl:px-32">
      <Image
        alt="background image"
        src="/philip-oroni-efqRsqQdyTg-unsplash.jpg"
        fill
        className="-z-10 object-cover"
      />
      <div className="w-full lg:w-1/2">
        <h1 className="w-full text-3xl font-medium tracking-tight md:text-4xl 2xl:text-5xl">
          Let&apos;s bring ideas to life.
        </h1>
        <h1 className="mb-6 w-full text-lg font-medium tracking-tight 2xl:text-xl">
          Building fast, scalable web apps with modern technologies.
        </h1>
        <Link
          href="#work"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'mb-6 h-16 w-full rounded-none bg-transparent text-base font-medium md:w-3/5 lg:w-2/5',
          )}
        >
          Explore Projects
        </Link>
      </div>

      <div className="hidden max-h-[600px] w-full flex-col lg:flex lg:w-1/2">
        <div className="flex">
          <div className="invisible aspect-square w-1/4"></div>
          <div className="invisible aspect-square w-1/4"></div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-b-0 border-[#FFFFFF20]">
            <Icons.Nextjs className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Next.JS</h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-b-0 border-l-0 border-[#FFFFFF20]">
            <Icons.React className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">React</h3>
          </div>
        </div>
        <div className="flex">
          <div className="invisible aspect-square w-1/4"></div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-b-0 border-r-0 border-[#FFFFFF20]">
            <Icons.Tailwind className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Tailwind</h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-b-0 border-[#FFFFFF20]">
            <Icons.PayloadCms className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Payload</h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-b-0 border-l-0 border-[#FFFFFF20]">
            <Icons.Drizzle className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">drizzle</h3>
          </div>
        </div>
        <div className="flex">
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border border-r-0 border-[#FFFFFF20]">
            <Icons.Supabase className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Supabase</h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border  border-r-0 border-[#FFFFFF20]">
            <Icons.ClerkHead className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Clerk</h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border   border-[#FFFFFF20]">
            <Icons.Postgresql className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">
              PostgreSQL
            </h3>
          </div>
          <div className="group flex aspect-square w-1/4 flex-col items-center justify-center border  border-l-0 border-[#FFFFFF20]">
            <Icons.MongoDb className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">MongoDB</h3>
          </div>
        </div>
      </div>

      {/* MOBILE ICONS */}
      <div className="block w-full lg:hidden">
        <div className="flex w-full">
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.Nextjs className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Next.JS</h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.React className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">React</h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.Tailwind className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Tailwind</h3>
          </div>
        </div>
        <div className="flex w-full">
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.PayloadCms className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Payload</h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.Drizzle className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">drizzle</h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.Supabase className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Supabase</h3>
          </div>
        </div>
        <div className="flex w-full">
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.ClerkHead className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Clerk</h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.Postgresql className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">
              PostgreSQL
            </h3>
          </div>
          <div className="group flex size-32 flex-col items-center justify-center border border-[#FFFFFF20]">
            <Icons.MongoDb className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">MongoDB</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
