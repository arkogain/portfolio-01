import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <>
      <section className="mt-12 flex items-center justify-center gap-5 lg:justify-start">
        <Link
          href={""}
          className="rounded-full border border-foreground bg-transparent p-3 text-foreground hover:border-background hover:bg-default-pink hover:text-white"
        >
          <Github size={20} />
        </Link>

        <Link
          href={""}
          className="rounded-full border border-foreground bg-transparent p-3 text-foreground hover:border-background hover:bg-default-pink hover:text-white"
        >
          <Linkedin size={20} />
        </Link>

        <Link
          href={""}
          className="rounded-full border border-foreground bg-transparent p-3 text-foreground hover:border-background hover:bg-default-pink hover:text-white"
        >
          <Mail size={20} />
        </Link>

        <Link
          href={""}
          className="rounded-full border border-foreground bg-transparent p-3 text-foreground hover:border-background hover:bg-default-pink hover:text-white"
        >
          <Facebook size={20} />
        </Link>

        <Link
          href={""}
          className="rounded-full border border-foreground bg-transparent p-3 text-foreground hover:border-background hover:bg-default-pink hover:text-white"
        >
          <Twitter size={20} />
        </Link>
      </section>
    </>
  );
};

export default SocialMediaIcons;
