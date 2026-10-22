
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Clock3, Phone } from "lucide-react";

import ContactUs from "../Components/ContactUs";
import Book from "../Components/Book";
import Social from "../Components/Social";
import GiftVouchers from "../Components/GiftVouchers";
import AppDownloadSection from "../Components/AppDownloadSection";

const contact = () => {
  return (
    <main className="overflow-hidden bg-[#f5eee6] text-[#171313]">
      {/* CONTACT HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#0d0b0c] px-6 py-28 text-[#f5eee6] md:px-10 lg:px-16">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#d8af7a]/[0.07] blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8af7a]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8af7a]">
                We'd Love to Hear From You
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let's make
              <br />
              <span className="italic text-[#d8af7a]">
                time for you.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Have a question, need help choosing a treatment, or ready
              for your next salon experience? Our team is here to help.
            </p>

            <a
              href="#contact-details"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d8af7a] px-6 py-4 text-xs font-semibold text-[#171313] transition hover:bg-[#e5c494]"
            >
              Get in Touch
              <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative border-t border-white/15 pt-7 lg:ml-auto lg:max-w-sm"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8af7a]">
              Your 11.11 Experience
            </p>

            <p className="mt-5 font-serif text-3xl leading-snug">
              A little time for yourself can change everything.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/55">
              <Clock3 className="h-4 w-4 text-[#d8af7a]" />
              Daily, 10 AM – 10 PM
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-white/55">
              <Phone className="h-4 w-4 text-[#d8af7a]" />
              +91 80078 61113
            </div>

            <a
              href="https://wa.me/918007861113"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#d8af7a] transition hover:text-[#e5c494]"
            >
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      <AppDownloadSection />

      {/* CONTACT DETAILS / EXISTING CONTACT COMPONENT */}
      <div id="contact-details">
        <ContactUs />
      </div>

      {/* BOOKING */}
      <Book />

      {/* GIFT VOUCHERS */}
      <GiftVouchers />

      {/* SOCIAL */}
      <Social />
    </main>
  );
};

export default contact;
