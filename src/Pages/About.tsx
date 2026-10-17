
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
//   Check,
  Clock3,
  Heart,
//   MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/Hero_image.jpg";
import heroImage2 from "../assets/Hero_image2.jpg";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = "918007861113";

const whatsappMessage = encodeURIComponent(
  "Hi 11.11 Salon & Spa, I would like to know more about your services."
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
  variants: fadeUp,
  transition: { duration: 0.65 },
};

const serviceCategories = [
  {
    number: "01",
    title: "Hair",
    description:
      "Thoughtful styling and hair care designed around your individual look.",
    image: gallery1,
  },
  {
    number: "02",
    title: "Skin",
    description:
      "Beauty rituals that give you a moment to pause and refresh.",
    image: gallery2,
  },
  {
    number: "03",
    title: "Nails & Beauty",
    description:
      "Finishing touches that bring together your personal style.",
    image: gallery3,
  },
];

const values = [
  {
    icon: Heart,
    title: "Personal Attention",
    description:
      "Your preferences matter. We want your experience to feel personal and comfortable.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "We value the little details that help make a beauty appointment feel special.",
  },
  {
    icon: Star,
    title: "Your Own Style",
    description:
      "Your beauty experience should reflect your individuality, not someone else's idea of it.",
  },
  {
    icon: Clock3,
    title: "Time for Yourself",
    description:
      "Make a little room in your day to slow down, unwind and focus on yourself.",
  },
];

const visitSteps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Discover the services and beauty experiences that interest you.",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Get in Touch",
    description:
      "Contact us to discuss your preferred service and appointment.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Enjoy Your Visit",
    description:
      "Arrive, settle in and make time for yourself.",
    icon: Heart,
  },
];

const faqs = [
  {
    question: "What are your opening hours?",
    answer:
      "Our listed opening hours are daily from 10:00 AM to 10:00 PM. Please contact us to confirm availability for your preferred visit.",
  },
  {
    question: "How can I enquire about services?",
    answer:
      "Visit our Services page to explore the available categories, then contact us to ask about a particular service.",
  },
  {
    question: "How do I enquire about an appointment?",
    answer:
      "You can contact 11.11 Salon & Spa through our Contact page or WhatsApp to discuss your preferred appointment.",
  },
  {
    question: "Where can I find the salon?",
    answer:
      "Please visit our Contact page for the salon's location and directions.",
  },
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#0d0b0c] text-[#f7efe7]">
      {/* 01 — HERO */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#0d0b0c] sm:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="11.11 Salon & Spa"
            className="h-full w-full object-cover object-center opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b0c] via-[#0d0b0c]/80 to-[#0d0b0c]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0c] via-transparent to-[#0d0b0c]/30" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d8b36a] sm:text-xs"
            >
              <span className="h-px w-10 bg-[#d8b36a]" />
              The 11.11 Experience
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Beauty is personal.
              <br />
              <span className="font-light italic text-[#d8b36a]">
                We make it yours.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-sm leading-7 text-[#c0b7b0] sm:text-base sm:leading-8"
            >
              A modern beauty destination built around your individuality,
              personal style and the importance of making time for yourself.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-4 bg-[#d8b36a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#171313] transition-colors hover:bg-[#edcf98]"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-xs uppercase tracking-[0.12em] transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a]"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02 — ABOUT US */}
      <section className="bg-[#f4f1ec] py-20 text-[#171313] sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16">
          <motion.div {...reveal} className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#ded8d0]">
              <img
                src={heroImage2}
                alt="A glimpse inside 11.11 Salon & Spa"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 border border-[#d8b36a] bg-[#f4f1ec] px-5 py-5 sm:-right-5 sm:px-8">
              <p className="font-serif text-2xl italic sm:text-3xl">
                Feel like you.
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#766d66]">
                Your Beauty Destination
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal} className="pt-3 lg:pt-0">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              About 11.11
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              More than a
              <br />
              beauty appointment.
            </h2>

            <div className="my-7 h-px w-16 bg-[#d8b36a]" />

            <p className="text-sm leading-8 text-[#625a55] sm:text-base">
              At 11.11 Salon & Spa, beauty is about more than the final look.
              It is also about how you feel throughout the experience. We
              want to offer a welcoming environment where you can take a
              pause from your day and give yourself the attention you deserve.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#625a55] sm:text-base">
              Whether you are preparing for a special occasion or simply
              making time for yourself, our intention is to make your visit
              feel relaxed, personal and memorable.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#171313]/30 pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#94733b] hover:text-[#94733b]"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 03 — PHILOSOPHY */}
      <section className="bg-[#171313] py-20 sm:py-28">
        <motion.div
          {...reveal}
          className="mx-auto max-w-[1000px] px-6 text-center sm:px-10"
        >
          <span className="mx-auto mb-7 block h-px w-12 bg-[#d8b36a]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">
            What We Believe
          </p>

          <h2 className="mt-7 font-serif text-3xl leading-snug sm:text-5xl lg:text-6xl">
            The best kind of beauty
            <br className="hidden sm:block" />
            is the kind that feels like{" "}
            <span className="italic text-[#d8b36a]">you.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#aaa09a] sm:text-base">
            We believe beauty should leave room for individuality, comfort
            and personal expression. Your style is your own, and your beauty
            experience should reflect that.
          </p>
        </motion.div>
      </section>

      {/* 04 — THE ART OF BEAUTY */}
      <section className="bg-[#f4f1ec] py-20 text-[#171313] sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div {...reveal}>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
                <span className="h-px w-8 bg-[#d8b36a]" />
                Craft & Creativity
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                The art of
                <br />
                <span className="italic text-[#b58b4b]">feeling beautiful.</span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#625a55] sm:text-base">
                Every person has a different idea of beauty. We value a
                thoughtful approach that considers your preferences, your
                style and the look you want to achieve.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#625a55] sm:text-base">
                For us, the experience matters just as much as the finishing
                touch: taking time to understand what you want and helping
                you feel comfortable throughout your visit.
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[#171313]/15 pt-6">
                <Scissors className="text-[#b58b4b]" size={22} strokeWidth={1.4} />
                <p className="font-serif text-xl italic">
                  Thoughtful care. Individual style.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="relative grid grid-cols-[1.1fr_0.9fr] items-center gap-3 sm:gap-5"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#ded8d0]">
                <img
                  src={gallery4}
                  alt="Beauty details at 11.11 Salon & Spa"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>

              <div className="mt-12 aspect-[3/4] overflow-hidden bg-[#ded8d0] sm:mt-20">
                <img
                  src={gallery5}
                  alt="A closer look at the salon experience"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8b36a] bg-[#f4f1ec] sm:h-24 sm:w-24">
                <Sparkles size={27} className="text-[#b58b4b]" strokeWidth={1.2} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — SERVICE PREVIEW */}
      <section className="bg-[#0d0b0c] py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <motion.div
            {...reveal}
            className="flex flex-col justify-between gap-7 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
                <span className="h-px w-8 bg-[#d8b36a]" />
                Discover Our Menu
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
                Your beauty, your way.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#aaa09a]">
                Explore a few of our beauty categories and discover the
                services that suit your personal style.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#d8b36a]/50 pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#d8b36a] transition-colors hover:border-white hover:text-white"
            >
              View All Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service, index) => (
              <motion.article
                key={service.number}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/services" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#24201e]">
                    <img
                      src={service.image}
                      alt={`${service.title} at 11.11 Salon & Spa`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    <span className="absolute left-5 top-5 border border-white/40 px-3 py-2 text-[10px] tracking-[0.2em] text-white">
                      {service.number}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-3xl sm:text-4xl">
                            {service.title}
                          </h3>
                          <p className="mt-3 max-w-xs text-xs leading-6 text-white/75">
                            {service.description}
                          </p>
                        </div>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 transition-colors group-hover:border-[#d8b36a] group-hover:bg-[#d8b36a] group-hover:text-[#171313]">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — THE TEAM */}
      <section className="bg-[#f4f1ec] py-20 text-[#171313] sm:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
          <motion.div {...reveal}>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              The People Behind the Experience
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Beauty begins
              <br />
              with people.
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#625a55] sm:text-base">
              A great salon experience starts with listening, understanding
              your preferences and caring about the details. We believe
              personal attention should be part of every visit.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#625a55] sm:text-base">
              Get to know our team and discover more about the people who
              help shape your salon experience.
            </p>

            <Link
              to="/team"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#171313]/30 pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#94733b] hover:text-[#94733b]"
            >
              Meet Our Team
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div {...reveal} className="relative">
            <div className="aspect-[5/4] overflow-hidden bg-[#ded8d0]">
              <img
                src={gallery6}
                alt="The beauty experience at 11.11 Salon & Spa"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 max-w-[230px] border border-[#d8b36a] bg-[#f4f1ec] p-5 sm:-left-5 sm:p-7">
              <Sparkles size={20} className="mb-3 text-[#b58b4b]" />
              <p className="font-serif text-xl italic sm:text-2xl">
                Your style matters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 07 — INSIDE 11.11 */}
      <section className="bg-[#171313] py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <motion.div {...reveal} className="mb-12 max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              A Look Inside
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              Inside 11.11.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#aaa09a]">
              A visual glimpse of the details, spaces and beauty experiences
              that make up our salon.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            <motion.div
              {...reveal}
              className="col-span-2 row-span-2 overflow-hidden bg-[#292421]"
            >
              <img
                src={heroImage}
                alt="Inside 11.11 Salon & Spa"
                loading="lazy"
                className="h-full min-h-[280px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0 sm:min-h-[400px]"
              />
            </motion.div>

            {[gallery2, gallery3, gallery4, gallery5].map((image, index) => (
              <motion.div
                key={image}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="aspect-square overflow-hidden bg-[#292421]"
              >
                <img
                  src={image}
                  alt={`11.11 Salon & Spa gallery view ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 border-b border-[#d8b36a]/50 pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#d8b36a] transition-colors hover:border-white hover:text-white"
            >
              Explore the Gallery
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 08 — YOUR VISIT */}
      <section className="bg-[#f4f1ec] py-20 text-[#171313] sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
              Your Visit
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Three steps to your moment.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#766d66]">
              A simple way to start planning your next salon visit.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-[#d8b36a]/60 md:block" />

            {visitSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  {...reveal}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b36a] bg-[#f4f1ec]">
                    <Icon size={21} className="text-[#94733b]" strokeWidth={1.4} />
                  </div>

                  <p className="mt-6 text-[10px] font-semibold tracking-[0.25em] text-[#94733b]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#766d66]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#171313] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#f7efe7] transition-colors hover:bg-[#b58b4b]"
            >
              Plan Your Visit
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 — DETAILS THAT MATTER */}
      <section className="bg-[#0d0b0c] py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              Why 11.11
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              The details matter.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#aaa09a]">
              We want the experience to feel considered from the moment you
              arrive to the moment you leave.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  {...reveal}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="bg-[#0d0b0c] p-7 sm:p-8"
                >
                  <span className="text-[10px] tracking-[0.25em] text-[#d8b36a]">
                    0{index + 1}
                  </span>

                  <div className="my-6 flex h-11 w-11 items-center justify-center border border-[#d8b36a]/40 text-[#d8b36a]">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#aaa09a]">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className="bg-[#f4f1ec] py-20 text-[#171313] sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
          <motion.div {...reveal}>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              Need to Know
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              A few things
              <br />
              you may wonder.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#766d66]">
              Have another question? Our team is happy to help you understand
              the next steps for your visit.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#171313]/30 pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#94733b] hover:text-[#94733b]"
            >
              Ask Us a Question
              <MessageCircle size={15} />
            </Link>
          </motion.div>

          <motion.div {...reveal} className="border-t border-[#171313]/15">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#171313]/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 text-[10px] tracking-wider text-[#94733b]">
                        0{index + 1}
                      </span>
                      <span className="font-serif text-lg sm:text-xl">
                        {faq.question}
                      </span>
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#94733b] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-9 text-sm leading-7 text-[#766d66]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 11 — FINAL CTA */}
      <section className="relative overflow-hidden bg-[#171313] px-6 py-24 text-center sm:px-10 sm:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage2}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover grayscale opacity-10"
          />
          <div className="absolute inset-0 bg-[#171313]/70" />
        </div>

        <motion.div {...reveal} className="relative mx-auto max-w-3xl">
          <span className="mx-auto mb-7 block h-px w-12 bg-[#d8b36a]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d8b36a]">
            Your Next Little Escape
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            Make time for
            <br />
            <span className="italic text-[#d8b36a]">yourself.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#c0b7b0] sm:text-base">
            Discover our services and get in touch to plan your next visit
            to 11.11 Salon & Spa.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-4 bg-[#d8b36a] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#171313] transition-colors hover:bg-[#edcf98]"
            >
              Explore Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.15em] transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a]"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
