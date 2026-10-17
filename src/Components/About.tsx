import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Scissors,
  Heart,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5eee6] py-28 text-[#21151a] sm:py-36 lg:py-44"
    >
      {/* Decorative background elements */}

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#e96b5f]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-32 bottom-10  h-80 w-80 rounded-full bg-[#d8b36a]/15 blur-[120px]" />

      {/* Large background 11 */}

      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none lg:block">
        <span className="font-serif text-[30rem] font-medium leading-none tracking-[-0.12em] text-[#21151a]/[0.035]">
          11
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-7 -mt-20 flex items-center gap-3">

            <span className="h-px w-10 bg-[#e96b5f]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8b6d52]">
              The 11—11 Experience
            </span>

          </div>

          <h2 className="font-serif text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-8xl">

            Beauty is personal.

            <br />

            <span className="italic text-[#b58b4d]">
              We make it yours.
            </span>

          </h2>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <p className="max-w-2xl text-lg leading-8 text-[#55494a]">
              11—11 is a modern beauty atelier built around one simple
              idea — your salon experience should feel as individual as
              you are.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#766a68]">
              From precision hair styling and grooming to beauty rituals
              and personalised care, our approach combines skilled
              professionals, thoughtful details and an atmosphere
              designed to make you slow down and enjoy the moment.
            </p>

            {/* CTA */}

            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#21151a]"
            >
              Discover 11—11

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#21151a] text-[#f5eee6] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

          </motion.div>

          {/* RIGHT — VALUES */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >

            <div className="border-t border-[#21151a]/15">

              {/* Value 01 */}

              <div className="group flex gap-5 border-b border-[#21151a]/15 py-7">

                <span className="pt-1 text-[9px] font-bold tracking-[0.15em] text-[#e96b5f]">
                  01
                </span>

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <Scissors className="h-4 w-4 text-[#b58b4d]" />

                    <h3 className="font-serif text-2xl">
                      Precision
                    </h3>

                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#766a68]">
                    Every cut, colour and finish is considered with
                    attention to detail.
                  </p>

                </div>

              </div>

              {/* Value 02 */}

              <div className="group flex gap-5 border-b border-[#21151a]/15 py-7">

                <span className="pt-1 text-[9px] font-bold tracking-[0.15em] text-[#e96b5f]">
                  02
                </span>

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <Heart className="h-4 w-4 text-[#e96b5f]" />

                    <h3 className="font-serif text-2xl">
                      Personal
                    </h3>

                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#766a68]">
                    Your style, your preferences, your experience —
                    always at the centre.
                  </p>

                </div>

              </div>

              {/* Value 03 */}

              <div className="group flex gap-5 border-b border-[#21151a]/15 py-7">

                <span className="pt-1 text-[9px] font-bold tracking-[0.15em] text-[#e96b5f]">
                  03
                </span>

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <Sparkles className="h-4 w-4 text-[#b58b4d]" />

                    <h3 className="font-serif text-2xl">
                      Effortless
                    </h3>

                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#766a68]">
                    A calm, elevated environment where looking good
                    feels effortless.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
          className="mt-24 grid grid-cols-2 border-y border-[#21151a]/15 md:grid-cols-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Stat */}

          <div className="border-b border-[#21151a]/15 px-5 py-8 md:border-b-0 md:border-r">
            <p className="font-serif text-4xl text-[#21151a]">
              11
            </p>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81736f]">
              Signature Experience
            </p>
          </div>

          {/* Stat */}

          <div className="border-b border-[#21151a]/15 px-5 py-8 md:border-b-0 md:border-r">
            <p className="font-serif text-4xl text-[#21151a]">
              100%
            </p>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81736f]">
              Personalised Care
            </p>
          </div>

          {/* Stat */}

          <div className="border-r-0 border-b border-[#21151a]/15 px-5 py-8 md:border-b-0 md:border-r">
            <div className="flex items-center gap-2">

              <p className="font-serif text-4xl text-[#21151a]">
                5
              </p>

              <Star className="h-4 w-4 fill-[#d8b36a] text-[#d8b36a]" />

            </div>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81736f]">
              Star Experience
            </p>
          </div>

          {/* Stat */}

          <div className="px-5 py-8">
            <p className="font-serif text-4xl text-[#21151a]">
              ∞
            </p>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81736f]">
              Ways To Be You
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;