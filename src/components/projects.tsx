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
              <Card className="flex-col justify-between backdrop-blur supports-[backdrop-filter]:bg-background/70 md:w-1/2 md:flex-row">
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

                <CardContent>{project.description}</CardContent>

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

              <Card className="w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 md:w-1/2">
                <CardContent className="relative h-96 rounded-lg md:h-full">
                  <Image
                    src="/project-1.png"
                    alt="project1"
                    objectFit="cover"
                    fill
                    className="aspect-video rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default Projects;
