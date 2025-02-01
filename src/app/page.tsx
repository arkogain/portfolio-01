import { Button } from "@/components/ui/button";
import {
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="container mx-auto flex max-w-screen-lg flex-col items-center gap-14 px-6">
        {/* image desktop right side */}
        <Image
          src={"/profile-picture.png"}
          alt="Profile picture"
          width={250}
          height={250}
          className="rounded-full shadow-2xl shadow-default-pink"
        />

        {/* Desktop Left side content of hero section */}

        <div className="font-jetbrains">
          <div className="text-center text-2xl font-medium">
            Frontend Developer
          </div>

          <div className="text-center text-5xl font-bold tracking-wide">
            <span className="leading-[3.5rem] text-foreground">Hello I'm </span>
            <span className="leading-[3.5rem] text-default-pink">
              Luke Michael
            </span>
          </div>

          <div className="mt-4 text-center">
            I'm a passionate Frontend Developer with a keen eye for design & a
            love for crafting seamless user exprience. I focus on clean code,
            performance, and accessibility to deliver seamless digital
            solutions.
          </div>

          <div className="mt-12 grid place-items-center">
            <Button
              variant={"outline"}
              className="rounded-full border-default-pink bg-transparent px-8 py-3 text-lg"
            >
              Download CV <Download />{" "}
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-5">
            <Link
              href={""}
              className="rounded-full border border-foreground bg-transparent p-3 text-foreground dark:hover:bg-default-pink"
            >
              <Github size={16} />
            </Link>
            <Link
              href={""}
              className="rounded-full border border-foreground bg-transparent p-3 text-foreground dark:hover:bg-default-pink"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href={""}
              className="rounded-full border border-foreground bg-transparent p-3 text-foreground dark:hover:bg-default-pink"
            >
              <Mail size={16} />
            </Link>
            <Link
              href={""}
              className="rounded-full border border-foreground bg-transparent p-3 text-foreground dark:hover:bg-default-pink"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href={""}
              className="rounded-full border border-foreground bg-transparent p-3 text-foreground dark:hover:bg-default-pink"
            >
              <Twitter size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
