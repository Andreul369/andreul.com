import React from 'react';
import Link from 'next/link';

import { navItems } from '@/app/config';

const NavBar = () => {
  return (
    <div className="top-0 z-50 hidden w-full items-center justify-center gap-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:flex">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <p className="text-2xl">{`<andreul />`}</p>
        <nav className="flex h-16 items-center gap-4">
          {navItems.map((item, idx) => (
            <Link href={item.href} key={`${item.href}-${idx}`}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
