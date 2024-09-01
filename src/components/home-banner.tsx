import React from 'react';
import Image from 'next/image';

import * as Icons from '@/components/icons';
import { Button } from './ui';

const HomeBanner = () => {
  return (
    <section className="relative flex min-h-[100vh] w-full flex-col items-center bg-gradient-to-b from-transparent from-0% via-transparent via-0% to-black to-100% px-4 py-16 sm:min-h-[80vh] sm:flex-row md:px-16 xl:px-32">
      <Image
        alt="background image"
        src="/philip-oroni-efqRsqQdyTg-unsplash.jpg"
        fill
        className="-z-10 object-cover"
      />
      <div className="w-full sm:w-1/2">
        <h1 className="mb-6 w-full text-5xl font-medium tracking-tight sm:w-4/5">
          Building apps and websites that bring ideas to life, driving
          innovation and results with every project.
        </h1>
        <Button
          variant="outline"
          className="h-16 w-full rounded-none bg-transparent font-medium sm:w-2/5"
        >
          Explore Projects
        </Button>
      </div>

      {/* DESKTOP ICONS GRID */}
      <div className="my-10 hidden max-h-[600px] w-full grow sm:block sm:w-1/2">
        <div className="grid grid-cols-4 grid-rows-3">
          <div className="group relative col-start-3 flex flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Nextjs className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Next.JS</h3>
          </div>

          <div className="group relative col-start-4 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.React className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">React</h3>
          </div>
          <div className="group relative col-start-2 row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Tailwind className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Tailwind</h3>
          </div>
          <div className="group relative col-start-3 row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.PayloadCms className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Payload</h3>
          </div>
          <div className="group relative col-start-4 row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Drizzle className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">drizzle</h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Supabase className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Supabase</h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.ClerkHead className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Clerk</h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Postgresql className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">
              PostgreSQL
            </h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.MongoDb className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">MongoDB</h3>
          </div>
        </div>
      </div>

      {/* MOBILE ICONS GRID */}
      <div className="hidden w-full max-sm:block">
        <div className="grid grid-cols-3 grid-rows-3 ">
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Nextjs className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Next.JS</h3>
          </div>
          <div className="group relative flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.React className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">React</h3>
          </div>
          <div className="group relative flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Tailwind className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Tailwind</h3>
          </div>
          <div className="group relative row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.PayloadCms className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Payload</h3>
          </div>
          <div className="group relative row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Drizzle className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">drizzle</h3>
          </div>
          <div className="group relative row-start-2 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Supabase className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Supabase</h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.ClerkHead className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">Clerk</h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.Postgresql className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">
              PostgreSQL
            </h3>
          </div>
          <div className="group relative row-start-3 flex aspect-square flex-col items-center justify-center gap-2 border border-[#ffffff20]">
            <Icons.MongoDb className="size-16" />
            <h3 className="hidden font-semibold group-hover:block">MongoDB</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
