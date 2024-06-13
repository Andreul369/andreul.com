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
} from '@/components/ui';

const Projects = () => {
  return (
    <section id="projects" className="flex w-full gap-4 pt-4">
      <Card className="w-1/2 flex-grow backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <CardHeader>
          <CardTitle>DevFlow</CardTitle>
          <CardDescription>
            A platform like StackOverflow. Deci imaginea siteului cu background
            gradient paralax intr-un card.
          </CardDescription>
        </CardHeader>
        <CardContent>ASDASDASDS</CardContent>
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
        <CardContent className="relative h-96 rounded-lg">
          <Image
            src="/project-1.png"
            alt="project1"
            objectFit="cover"
            fill
            className="rounded-md"
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default Projects;
