import React from 'react';
import Link from 'next/link';

import * as Icons from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/utils/cn';

const Socials = ({ className }: { className: string }) => {
  return (
    <section className={cn(className)}>
      <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CardHeader>
          <CardTitle>Find me on</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Link
            href="https://github.com/Andreul369"
            target="_blank"
            className="size-16 rounded-sm border p-4"
          >
            <Icons.GitHub className="size-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrei-bojor-0207b1210/"
            target="_blank"
            className="size-16 rounded-sm border p-4"
          >
            <Icons.LinkedIn className="size-8" />
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Socials;
