import { motion } from "framer-motion";
import {
  Camera,
  ArrowUpRight,
  Upload,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Social = () => {
  return (
    <section
      id="social"
      className="relative overflow-hidden -mt-15 bg-[#f5eee6] px-6 py-24 text-[#171313] md:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d8af7a]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-[#171313]/10 pb-12 lg:grid-cols-[1fr_0.6fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9b7044]">
              Stay Connected
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Your 11.11 moment
              <br />
              <span className="font-serif italic text-[#9b7044]">
                deserves to be shared.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-7 text-[#171313]/55 md:text-base">
              Follow us for fresh looks, salon moments, beauty
              inspiration and everything happening at 11.11.
            </p>
          </div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-6 py-16 lg:grid-cols-2">

          {/* INSTAGRAM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[#171313] p-8 text-[#f5eee6] md:p-12"
          >
            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d8af7a]/20" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8af7a]/40 text-[#d8af7a]">
                 <FaInstagram size={24} />              </div>

              <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
                Follow Along
              </p>

              <h3 className="mt-4 text-3xl font-light md:text-4xl">
                Behind the chair.
                <br />
                <span className="font-serif italic text-[#d8af7a]">
                  Beyond the salon.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                Follow our Instagram to discover new looks,
                transformations, beauty tips, special moments and
                what's happening inside the salon.
              </p>

              <a
                href="https://www.instagram.com/11.11salonandspa.official/"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d8af7a] px-6 py-3.5 text-sm text-[#171313] transition hover:bg-[#e5c494]"
              >
                Follow @11.11salon

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>

            {/* Bottom handle */}
            <div className="relative mt-14 border-t border-white/10 pt-5">
              <p className="text-xs text-white/30">
                #11.11Salon &nbsp; #11.11Beauty
              </p>
            </div>
          </motion.div>

          {/* UPLOAD MEMORY CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#171313]/10 bg-white/60 p-8 md:p-12"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8af7a]/20 text-[#9b7044]">
              <Camera size={24} strokeWidth={1.4} />
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#9b7044]">
              Share Your Memory
            </p>

            <h3 className="mt-4 text-3xl font-light md:text-4xl">
              Had a great
              <br />
              <span className="font-serif italic">
                11.11 moment?
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#171313]/55">
              Share your favourite salon memory with us. Your
              moment could become part of our community.
            </p>

            {/* Upload Area */}
            <label
              htmlFor="memory-upload"
              className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#171313]/20 bg-[#f5eee6] px-6 py-10 text-center transition hover:border-[#9b7044] hover:bg-[#eee5da]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171313] text-[#d8af7a]">
                <Upload size={20} />
              </div>

              <p className="mt-4 text-sm font-medium">
                Upload your salon memory
              </p>

              <p className="mt-2 text-xs text-[#171313]/40">
                JPG, PNG or WEBP
              </p>

              <input
                id="memory-upload"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
              />
            </label>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#171313] px-6 py-4 text-sm text-[#f5eee6] transition hover:bg-[#9b7044]"
            >
              Share Your Memory
              <ArrowUpRight size={17} />
            </button>

            <p className="mt-4 text-center text-[10px] leading-5 text-[#171313]/35">
              By sharing, you agree that 11.11 Salon may feature
              your submitted image on its social channels.
            </p>
          </motion.div>
        </div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[#171313]/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <p className="text-xs uppercase tracking-[0.25em] text-[#171313]/40">
              Find us online
            </p>

           <div className="flex flex-wrap gap-3">

  <a
    href="#"
    className="flex items-center gap-2 rounded-full border border-[#171313]/15 px-5 py-3 text-xs transition hover:border-[#9b7044] hover:text-[#9b7044]"
  >
    <FaInstagram size={16} />
    Instagram
  </a>

  <a
    href="#"
    className="flex items-center gap-2 rounded-full border border-[#171313]/15 px-5 py-3 text-xs transition hover:border-[#9b7044] hover:text-[#9b7044]"
  >
    <FaFacebookF size={15} />
    Facebook
  </a>

  <a
    href="#"
    className="flex items-center gap-2 rounded-full border border-[#171313]/15 px-5 py-3 text-xs transition hover:border-[#9b7044] hover:text-[#9b7044]"
  >
    <FaWhatsapp size={17} />
    WhatsApp
  </a>

</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Social;