import React from 'react';
import dynamic from 'next/dynamic';

import { TextHoverEffect } from './text-hover-effect';
import { Button } from './ui';

const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
  loading: () => (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 px-2 text-lg font-semibold md:text-base"
    >
      <div className="h-6 w-6 animate-pulse rounded-full bg-muted-foreground/70" />
      <span className="w-14 animate-pulse rounded bg-muted-foreground/70 capitalize">
        &nbsp;
      </span>
    </Button>
  ),
});

const Footer = () => {
  return (
    <footer className="flex w-full max-w-7xl items-center justify-between border-t">
      {/* <h1>Built with ♥ by andreul.com</h1> */}
      {/* <ThemeToggle /> */}
    </footer>
  );
};

export default Footer;
