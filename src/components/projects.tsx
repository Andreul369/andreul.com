import React from 'react';
import Image from 'next/image';

import * as Icons from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

const Projects = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>DevFlow</CardTitle>
          <CardDescription>A platform like StackOverflow</CardDescription>
        </CardHeader>
        <CardContent className="relative h-96 rounded-lg">
          <Image src="/project-1.png" alt="project1" objectFit="cover" fill />
        </CardContent>
        <CardFooter className="flex justify-end gap-2 pt-6">
          <Button variant="outline">
            <Icons.LaptopMinimal className="mr-2 size-4" />
            Demo
          </Button>
          <Button variant="outline">
            <Icons.GitHub className="mr-2 size-4" />
            Github
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
