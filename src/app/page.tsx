import Link from 'next/link';

import Contact from '@/components/contact';
import HomeIntro from '@/components/home-intro';
import * as Icons from '@/components/icons';
import Projects from '@/components/projects';
import Socials from '@/components/socials';
import Testimonials from '@/components/testimonials';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 z-[-1] mt-32 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <div className="flex w-full gap-4 pt-14">
        <Card className="w-full backdrop-blur-sm supports-[backdrop-filter]:bg-background/70">
          <CardHeader>
            <CardTitle>ASd</CardTitle>
          </CardHeader>
          <CardContent>
            in loc de light dark ar putea sa fie ice fire si pe ice(light) sa
            fie albastrul deschis de la cyberpunk si pe dark sa fie cu rosu
            cyberpunk{' '}
          </CardContent>
        </Card>
        <Socials />
      </div>

      <Projects />

      <div className="flex w-full gap-4 pt-4">
        <Card className="flex w-2/5 flex-grow flex-col backdrop-blur supports-[backdrop-filter]:bg-background/70">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex h-full flex-col justify-between">
            <div className="flex w-full flex-grow items-center justify-between">
              <Icons.Nextjs className="size-14" />
              <Icons.React className="size-14" />
              <Icons.Tailwind className="size-14" />
            </div>
            <div className="flex flex-grow items-center justify-between">
              <Icons.ClerkHead className="size-14" />
              <Icons.Supabase className="size-14" />
              <Icons.Postgresql className="size-14" />
              <Icons.MongoDb className="size-14" />
            </div>
          </CardContent>
        </Card>
        <Contact />
      </div>

      {/* <Testimonials /> */}

      {/* <HomeIntro /> */}
      <div className="fixed bottom-0 left-0 z-[-1] mt-32 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
    </>
  );
}
