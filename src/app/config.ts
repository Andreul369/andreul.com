import type { Route } from 'next';

export const siteConfig = {
  name: 'andreul.com',
  description: 'andreul.com is the official portfolio of Andrei Bojor',
  github: 'https://github.com/Andreul369',
  //   twitter: 'https://twitter.com/jullerino',
};

export const navItems = [
  {
    href: '#',
    title: 'Overview',
  },
  {
    href: '#',
    title: 'Pricing',
  },
  {
    href: '#',
    title: 'Products',
  },
  {
    href: '#',
    title: 'Settings',
  },
] satisfies { href: Route; title: string }[];
