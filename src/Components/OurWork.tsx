import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scissors,
  Sparkles,
  Heart,
  Palette,
} from "lucide-react";

const workCategories = [
  {
    number: "01",
    title: "Hair",
    description:
      "Precision cuts, styling, colour and treatments designed around your personality.",
    icon: Scissors,
    services: ["Haircuts", "Hair Colour", "Hair Spa", "Styling"],
  },
  {
    number: "02",
    title: "Beauty",
    description:
      "Thoughtful beauty rituals that leave you feeling refreshed, confident and effortless.",
    icon: Sparkles,
    services: ["Facials", "Cleanup", "Skin Rituals", "Makeup"],
  },
  {
    number: "03",
    title: "Nails",
    description:
      "Clean details, modern finishes and beautiful nail work for every occasion.",
    icon: Palette,
    services: ["Manicure", "Pedicure", "Gel Nails", "Nail Art"],
  },
  {
    number: "04",
    title: "Bridal",
    description:
      "Complete bridal beauty experiences created for your most memorable moments.",
    icon: Heart,
    services: ["Bridal Makeup", "Hair Styling", "Draping", "Grooming"],
  },
];

const OurWork = () => {
  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-[#f5eee6] px-6 py-24 text-[#171313] md:px-10 lg:px-16"
    >
      {/* Decorative number */}
      <div className="pointer-events-none absolute -right-10 top-10 select-none text-[220px] font-serif leading-none text-[#171313]/[0.035] md:text-[320px]">
        11
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-[#171313]/10 pb-12 lg:grid-cols-[1fr_0.7fr]"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9b7044]">
              Our Work
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              Beauty is not
              <br />
              <span className="font-serif italic text-[#9b7044]">
                one-size-fits-all.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-7 text-[#171313]/60 md:text-base">
              Every look we create starts with understanding you.
              From subtle everyday changes to complete transformations,
              our work is built around individuality, detail and
              confidence.
            </p>
          </div>
        </motion.div>

        {/* FEATURED RESULT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid overflow-hidden border-b border-[#171313]/10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9b7044]">
                The 11.11 Approach
              </p>

              <h3 className="mt-5 max-w-lg text-3xl font-light leading-tight md:text-5xl">
                Your style.
                <br />
                <span className="font-serif italic">
                  Our craft.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#171313]/55">
                We focus on the little things — consultation,
                technique, finishing and the details that make
                your final look feel completely yours.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-[#171313]/30 pb-2 text-sm"
            >
              Start your transformation

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>

          {/* Right stats */}
          <div className="mt-12 grid grid-cols-2 border-t border-l border-[#171313]/10 lg:mt-0">
            <div className="border-b border-r border-[#171313]/10 p-7 md:p-10">
              <p className="text-4xl font-light md:text-6xl">
                360°
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#171313]/45">
                Beauty Experience
              </p>
            </div>

            <div className="border-b border-[#171313]/10 p-7 md:p-10">
              <p className="text-4xl font-light md:text-6xl">
                1:1
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#171313]/45">
                Personal Attention
              </p>
            </div>

            <div className="border-r border-[#171313]/10 p-7 md:p-10">
              <p className="text-4xl font-light md:text-6xl">
                4+
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#171313]/45">
                Beauty Categories
              </p>
            </div>

            <div className="p-7 md:p-10">
              <p className="text-4xl font-light md:text-6xl">
                ∞
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#171313]/45">
                Ways To Be You
              </p>
            </div>
          </div>
        </motion.div>

        {/* CATEGORIES */}
        <div className="pt-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9b7044]">
                Explore
              </p>

              <h3 className="mt-3 text-3xl font-light md:text-4xl">
                What we create
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#171313]/35 md:block">
              04 Categories
            </span>
          </div>

          <div className="grid border-t border-[#171313]/10 md:grid-cols-2">
            {workCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group border-b border-[#171313]/10 py-8 md:p-10 md:pl-0 md:pr-12"
                >
                  <div className="flex gap-6">

                    {/* Number */}
                    <span className="pt-1 text-xs text-[#9b7044]">
                      {item.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Icon
                            size={22}
                            strokeWidth={1.3}
                            className="text-[#9b7044]"
                          />

                          <h4 className="text-2xl font-light md:text-3xl">
                            {item.title}
                          </h4>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171313]/15 transition-all duration-300 group-hover:border-[#9b7044] group-hover:bg-[#9b7044]">
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:rotate-45"
                          />
                        </div>
                      </div>

                      <p className="mt-5 max-w-md text-sm leading-6 text-[#171313]/55">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-[#171313]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#171313]/50"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#171313]/10 pt-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b7044]">
            Made for you
          </p>

          <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-light leading-tight md:text-5xl">
            Come in with an idea.
            <br />
            <span className="font-serif italic text-[#9b7044]">
              Leave with your signature look.
            </span>
          </h3>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171313] px-7 py-4 text-sm text-[#f5eee6] transition hover:bg-[#9b7044]"
          >
            Book Your Appointment
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default OurWork;