"use client";

import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const page = () => {
  return (
    <>
      <section className="flex min-h-[90dvh] w-full flex-col items-center justify-center gap-14 lg:flex-row-reverse lg:justify-start lg:gap-20">
        {/* image desktop right side */}
        <Image
          src={"/profile-picture.png"}
          alt="Profile picture"
          width={384}
          height={384}
          className="h-64 w-64 rounded-full shadow-2xl shadow-default-pink lg:h-80 lg:w-80"
        />

        {/* Desktop Left side content of hero section */}

        <div className="font-jetbrains">
          <div className="mb-3 text-center text-2xl font-medium lg:text-start">
            <Typewriter
              options={{
                strings: ["Frontend Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="text-center text-5xl font-bold tracking-wide lg:text-start">
            <span className="leading-[3.5rem] text-foreground">Hello I'm </span>
            <span className="leading-[3.5rem] text-default-pink">
              Luke Michael
            </span>
          </div>

          <div className="mt-4 text-center lg:text-start">
            I'm a passionate Frontend Developer with a keen eye for design & a
            love for crafting seamless user exprience. I focus on clean code,
            performance, and accessibility to deliver seamless digital
            solutions.
          </div>

          <div className="mt-12 grid place-items-center lg:place-items-start">
            <Button
              variant={"outline"}
              className="rounded-full border-default-pink bg-transparent px-8 py-3 text-lg"
            >
              Download CV <Download />{" "}
            </Button>
          </div>

          <SocialMediaIcons />
        </div>
      </section>
    </>
  );
};

export default page;
