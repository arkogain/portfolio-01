import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="flex h-dvh flex-col items-center justify-center gap-24 font-jetbrains">
        <div className="text-center text-4xl font-bold text-default-pink lg:text-6xl">
          Contact with me
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:gap-56">
          {/* Desktop left Side */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-foreground/10 p-3">
                <PhoneCall className="text-default-pink" />
              </div>
              <div className="flex flex-col">
                <span className="text-default-pink">Phone</span>
                <span>8961042858</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-foreground/10 p-3">
                <Mail className="text-default-pink" />
              </div>
              <div className="flex flex-col">
                <span className="text-default-pink">Email</span>
                <span>lukemichel@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-foreground/10 p-3">
                <MapPin className="text-default-pink" />
              </div>
              <div className="flex flex-col">
                <span className="text-default-pink">Address</span>
                <span>Barasat</span>
              </div>
            </div>
            <div className="mt-24">
              <SocialMediaIcons />
            </div>
          </div>
          {/* Desktop left Side */}
          <div className="w-full">
            <Image
              src={"/contact.png"}
              alt="contact"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
