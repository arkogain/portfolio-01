import { Mail, MapPin, PhoneCall } from "lucide-react";

const page = () => {
  return (
    <>
      <section className="grid grid-cols-1 place-items-center lg:grid-cols-2">
        {/* Desktop left Side */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-foreground/10 p-3">
              <PhoneCall className="text-default-pink" />
            </div>
            <div className="flex flex-col">
              <span>Phone</span>
              <span>8961042858</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-foreground/10 p-3">
              <Mail className="text-default-pink" />
            </div>
            <div className="flex flex-col">
              <span>Email</span>
              <span>lukemichel@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-foreground/10 p-3">
              <MapPin className="text-default-pink" />
            </div>
            <div className="flex flex-col">
              <span>Address</span>
              <span>Barasat</span>
            </div>
          </div>
        </div>
        {/* Desktop left Side */}
        <div className=""></div>
      </section>
    </>
  );
};

export default page;
