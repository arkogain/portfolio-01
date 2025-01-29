import Link from "next/link";
import ThemeToggleBtn from "../DarkThemeComs/ThemeToggleBtn";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/50 shadow-2xl shadow-default-pink/5 backdrop-blur-lg">
        <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-6 py-6">
          {/* logo */}
          <Link href="/">
            <div className="font-jetbrains text-4xl font-semibold">
              Luke <span className="text-default-pink">.</span>
            </div>
          </Link>

          {/* desktop menu item  & theme switcher */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex">
              <DesktopMenu />
            </div>
            <div className="">
              <ThemeToggleBtn />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
