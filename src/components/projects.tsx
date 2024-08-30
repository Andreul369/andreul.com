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
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ScrollArea,
} from '@/components/ui';
import { projects } from '@/db/projects';

const Projects = () => {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-screen px-2 pt-4 sm:w-full"
      >
        <CarouselContent className="rounded-lg">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="flex w-full flex-col gap-4 md:flex-row"
            >
              <Card className="flex flex-col justify-between backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-1/2">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    Tech stack:{' '}
                    {project.techStack.map((tech) => (
                      <span key={tech} className="mr-2">
                        {tech}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ScrollArea className="h-[150px]">
                    {project.description}
                    <h1>Features:</h1>
                    {project.features.map((feature) => (
                      <p key={feature}>{feature}</p>
                    ))}
                  </ScrollArea>
                </CardContent>

                <CardFooter className="gap-2 self-end">
                  <Link
                    href="https://dev-flow-self.vercel.app"
                    target="_blank"
                    className="flex items-center rounded-sm border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icons.DemoLogo className="mr-2 size-4" />
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

              <Card className="w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-1/2">
                <CardContent className="relative aspect-video rounded-lg">
                  <div className="rounded-md p-6">
                    <Image
                      src={project.image}
                      alt="project1"
                      fill
                      className="rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselDots /> */}
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default Projects;
