import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navItemsLinks } from "@/lib/information";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>

        <SheetContent className="scrollbar-none flex flex-col gap-4 overflow-scroll overscroll-contain border-l-0 bg-background/70 px-4 backdrop-blur-lg">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-5"
          >
            {navItemsLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                >
                  <AccordionItem
                    className="rounded-lg px-5 py-3 font-jetbrains hover:no-underline dark:text-foreground"
                    value={item.id}
                  >
                    {item.name}
                  </AccordionItem>
                </Link>
              );
            })}
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
