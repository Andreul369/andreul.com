import React from 'react';
import Link from 'next/link';

import { navItems } from '@/app/config';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-2 border-b">
      <p className="text-2xl">{`<andreul />`}</p>
      <nav className="flex h-16 items-center gap-2">
        {navItems.map((item, idx) => (
          <Link href={item.href} key={`${item.href}-${idx}`}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
