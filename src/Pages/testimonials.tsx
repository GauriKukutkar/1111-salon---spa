
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";

import Testimonials from "../Components/Testimonials";
import Book from "../Components/Book";
import Social from "../Components/Social";

const TestimonialsPage = () => {
  return (
    <main className="overflow-hidden bg-[#f5eee6] text-[#171313]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0d0b0c] px-6 py-28 text-[#f5eee6] md:px-10 lg:px-16 lg:py-36">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#d8af7a]/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8af7a]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8af7a]">
                Words From Our Clients
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              It's more than
              <br />
              <span className="italic text-[#d8af7a]">
                a beauty experience.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Every visit has a story. Discover the experiences,
              little details and moments that make a salon visit
              feel special.
            </p>

            <a
              href="#client-stories"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d8af7a] px-6 py-4 text-xs font-semibold text-[#171313] transition hover:bg-[#e5c494]"
            >
              Discover Client Stories
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="mt-20 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Personal Attention",
                text: "Experiences shaped around individual preferences.",
              },
              {
                icon: Sparkles,
                title: "Beauty & Self-Care",
                text: "From everyday grooming to special occasions.",
              },
              {
                icon: Star,
                title: "Every Detail Matters",
                text: "A welcoming experience from start to finish.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.6 }}
                  className="border-white/10 py-4 sm:border-r sm:pr-5 last:border-r-0"
                >
                  <Icon className="h-5 w-5 text-[#d8af7a]" />

                  <h3 className="mt-5 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-6 text-white/45">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7044]">
              The Client Journal
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Real experiences.
              <br />
              <span className="italic text-[#9b7044]">
                Thoughtfully remembered.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#171313]/60">
            A great salon experience is about more than the final look.
            It is the consultation, the attention, the atmosphere and
            the confidence you carry with you afterwards.
          </p>
        </motion.div>
      </section>

      {/* EXISTING TESTIMONIALS COMPONENT */}
      <section id="client-stories">
        <Testimonials />
      </section>

      {/* EXPERIENCE VALUES */}
      <section className="bg-white/50 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7044]">
              The 11.11 Difference
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Your time.
              <br />
              Your style.
              <br />
              <span className="italic text-[#9b7044]">
                Your moment.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#171313]/55">
              We believe every client deserves attention, thoughtful
              recommendations and a beauty experience that feels
              personal to them.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#9b7044]/50 pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:text-[#9b7044]"
            >
              Plan Your Visit
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-[#171313] p-8 text-[#f5eee6] sm:p-12"
          >
            <Quote className="h-9 w-9 text-[#d8af7a]" />

            <p className="mt-8 font-serif text-3xl leading-relaxed sm:text-4xl">
              “Beauty is personal. The experience should be too.”
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8af7a]" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                The 11.11 Philosophy
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#d8af7a] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#171313]/60">
              Your Story Starts Here
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Ready for your 11.11 moment?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#171313]/65">
              Find your next favourite service and make time for yourself.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#171313] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#f5eee6] transition hover:bg-[#302523] sm:self-auto"
          >
            Plan Your Visit
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* SOCIAL */}
      <Social />

      {/* BOOKING COMPONENT */}
      <Book />
    </main>
  );
};

export default TestimonialsPage;
