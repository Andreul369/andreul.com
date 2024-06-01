import React from 'react';
import Link from 'next/link';

import { navItems } from '@/app/config';
import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

const MobileNav = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center gap-2 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex w-full max-w-6xl items-center justify-between px-4 py-2">
        <p className="text-2xl">{`<andreul />`}</p>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader className="flex justify-between">
              <SheetTitle className="text-2xl">{`<andreul />`}</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <Link key={`${item.title}-${idx}`} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
