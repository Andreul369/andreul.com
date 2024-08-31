import React from 'react';
import Link from 'next/link';

import * as Icons from '@/components/icons';

const NavBar = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center justify-between gap-2 bg-transparent px-4 mix-blend-difference sm:flex-row md:px-16 xl:px-32">
      <p className="text-2xl font-medium text-white">
        {`<andreul`} <span className="text-red-600">/</span>
        {`>`}
      </p>
      <div className="flex items-center justify-between gap-4">
        <Link href="https://github.com/Andreul369" target="_blank">
          <Icons.GitHub className="size-9" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrei-bojor-0207b1210/"
          target="_blank"
        >
          <Icons.LinkedIn className="size-9" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
