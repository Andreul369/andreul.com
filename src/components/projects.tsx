import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

const Projects = () => {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full rounded-lg"
      >
        <CarouselContent className="rounded-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex w-full gap-4 rounded-lg pt-4"
            >
              <Card className="flex w-1/2 flex-grow flex-col justify-between backdrop-blur supports-[backdrop-filter]:bg-background/70">
                <CardHeader>
                  <CardTitle>
                    DevFlow{' '}
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardTitle>
                  <CardDescription>
                    A platform like StackOverflow. Deci imaginea siteului cu
                    background gradient paralax intr-un card.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                  <p>
                    in loc de light dark ar putea sa fie ice fire si pe
                    ice(light) sa fie albastrul deschis de la cyberpunk si pe
                    dark sa fie cu rosu cyberpunk
                  </p>
                </CardContent>

                <CardFooter className="flex justify-end gap-2 pt-6">
                  <Link
                    href="https://dev-flow-self.vercel.app"
                    target="_blank"
                    className="flex items-center rounded-sm border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icons.LaptopMinimal className="mr-2 size-4" />
                    Demo
                  </Link>
                  <Link
                    href="https://github.com/Andreul369/DevFlow"
                    target="_blank"
                    className="flex items-center rounded-sm border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icons.GitHub className="mr-2 size-4" />
                    <span>Github</span>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="w-1/2 flex-grow backdrop-blur supports-[backdrop-filter]:bg-background/70">
                <CardContent className="relative h-full rounded-lg">
                  <Image
                    src="/project-1.png"
                    alt="project1"
                    fill
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Projects;
