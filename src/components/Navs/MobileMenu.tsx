"use client";

import { navItemsLinks } from "@/lib/information";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem } from "../ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ThemeToggleBtn from "../DarkThemeComs/ThemeToggleBtn";
import { useAtom } from "jotai";
import { sheetToggleAtom } from "@/lib/atom";

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
            <SheetTitle className="font-jetbrains text-3xl font-semibold">
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
                className="flex flex-col items-center gap-3 font-jetbrains"
              >
                <div className="hover:border-b-2 hover:border-deep-blue hover:text-light-blue dark:text-foreground dark:hover:border-default-pink dark:hover:text-default-pink">
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
