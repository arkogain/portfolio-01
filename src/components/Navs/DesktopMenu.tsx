"use client";

import { navItemsLinks } from "@/lib/information";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menubar, MenubarMenu } from "../ui/menubar";
import { Home } from "lucide-react";

const DesktopMenu = () => {
  const pathName = usePathname();
  //   console.log(pathName);

  return (
    <>
      <Menubar className="flex gap-5 border-0 bg-transparent p-4 text-base font-semibold">
        {navItemsLinks.map((item) => (
          <MenubarMenu key={item.id}>
            <Link
              href={item.href}
              className={` ${pathName === item.href ? "border-b-2 border-default-pink text-default-pink" : "dark:hover:text-default-pink"}`}
            >
              {<item.icon />}
              {item.name}
            </Link>
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  );
};

export default DesktopMenu;
