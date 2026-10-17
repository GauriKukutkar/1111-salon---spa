import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import heroImage from "../assets/Hero_image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0c0b0b]"
    >

      {/* =====================================================
          ANIMATED BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.img
          src={heroImage}
          alt="11—11 Salon"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      {/* Overall dark layer */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Strong left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080708]/95 via-[#080708]/65 to-[#080708]/10" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0c0b0b] to-transparent" />

      {/* Subtle gold atmosphere */}
      <motion.div
        className="absolute left-[12%] top-[40%] h-52 w-52 rounded-full bg-[#d8b36a]/10 blur-[110px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-16 pt-36 sm:px-10 lg:px-16">

        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* Label */}

          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="h-px w-8 bg-[#d8b36a]" />

            {/* <div className="flex items-center gap-2">

              <Sparkles className="h-3.5 w-3.5 text-[#d8b36a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e8d9c7] sm:text-xs">
                11—11 Beauty Atelier
              </span>

            </div> */}
          </motion.div>

          {/* Main heading */}

          <motion.h1
            className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.045em] text-[#fff8ef]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Your beauty.

            <br />

            <motion.span
              className="inline-block italic text-[#d8b36a]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              Your signature.
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            className="mt-7 max-w-xl text-sm leading-7 text-[#ded4cb] sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
          >
            A modern beauty experience where exceptional styling,
            thoughtful details and effortless confidence come together.
          </motion.p>

          {/* Buttons */}

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
          >

            {/* Primary */}

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-[#d8b36a] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#21181a] transition-all duration-300 hover:bg-[#f0d99f] hover:shadow-[0_10px_40px_rgba(216,179,106,0.2)]"
            >
              Book Your Appointment

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25101f] text-[#d8b36a] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* Secondary */}

            <a
              href="#services"
              className="group flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fff8ef] backdrop-blur-sm transition-all duration-300 hover:border-[#d8b36a] hover:text-[#d8b36a]"
            >
              Explore Services

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </motion.div>

        </motion.div>
      </div>

<br></br>
      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.6,
        }}
      >

        <div className="mx-auto  flex max-w-[1600px] items-end justify-between px-6 sm:px-10 lg:px-16">

          {/* Experience */}

          <div className="hidden items-center gap-8 sm:flex">

            <div>
                
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8e8580]">
                Experience
              </p>

              <p className="mt-1 text-xs text-[#e8ddd4]">
                Hair • Beauty • Grooming
              </p>
            </div>

            <div className="h-8 w-px bg-white/15" />

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8e8580]">
                Appointments
              </p>

              <p className="mt-1 text-xs text-[#e8ddd4]">
                Walk-ins & Bookings
              </p>
            </div>
          </div>

          {/* Scroll */}

          <a
            href="#about"
            className="group flex flex-col items-center gap-2"
          >

            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#a79c95]">
              Scroll to explore
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#d8b36a] transition-all duration-300 group-hover:border-[#d8b36a] group-hover:bg-[#d8b36a]/10">
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </span>

          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;