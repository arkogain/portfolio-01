"use client";

import { sheetToggleAtom } from "@/lib/atom";
import { navItemsLinks } from "@/lib/information";
import { useAtom } from "jotai";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileMenu = () => {
  const [sheetStatus, setSheetStatus] = useAtom(sheetToggleAtom);

  return (
    <>
      <Sheet
        open={sheetStatus}
        onOpenChange={(open) => setSheetStatus(open)}
      >
        <SheetTrigger
          onClick={() => setSheetStatus(true)}
          className="grid place-items-center"
        >
          <Menu />
        </SheetTrigger>

        <SheetContent className="scrollbar-none flex flex-col gap-4 overflow-scroll overscroll-contain border-l-0 bg-background px-4 backdrop-blur-lg">
          <SheetHeader>
            <SheetTitle className="mb-20 font-jetbrains text-3xl font-semibold">
              Luke <span className="text-default-pink">.</span>
            </SheetTitle>
          </SheetHeader>
          <SheetDescription></SheetDescription>

          {navItemsLinks.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setSheetStatus(false)}
                className="flex flex-col items-center gap-3 font-jetbrains text-lg font-semibold"
              >
                <div className="border-b-2 border-transparent text-foreground hover:border-b-2 hover:border-default-pink hover:text-default-pink">
                  {item.name}
                </div>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
