import React from 'react';

import { navItems } from '@/app/config';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex'>
      <p>{`<andreul />`}</p>
      <nav className='flex gap-2 h-16 border-b'>
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
