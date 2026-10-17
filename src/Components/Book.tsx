import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

const Book = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-[#171313] px-6 py-24 text-[#f5eee6] md:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8af7a]">
            Book
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
            Your next
            <span className="font-serif italic text-[#d8af7a]">
              {" "}beauty moment
            </span>
            {" "}starts here.
          </h2>
        </motion.div>

        {/* TWO COLUMN AREA */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#211d1c] lg:grid-cols-2">

          {/* ================= LEFT — FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-7 md:p-10 lg:p-14"
          >
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Appointment Request
              </p>

              <h3 className="mt-3 text-2xl font-light md:text-3xl">
                Tell us what you're looking for.
              </h3>
            </div>

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d8af7a]/40 text-[#d8af7a]">
                  <CheckCircle2 size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-light">
                  Request received.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                  Thank you. Our team will get in touch with you
                  to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Phone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#d8af7a]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#d8af7a]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#d8af7a]"
                  />
                </div>

                {/* Service + Stylist */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                      Service
                    </label>

                    <select
                      required
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition focus:border-[#d8af7a]"
                    >
                      <option value="" className="bg-[#211d1c]">
                        Select service
                      </option>

                      <option className="bg-[#211d1c]">
                        Haircut & Styling
                      </option>

                      <option className="bg-[#211d1c]">
                        Hair Colour
                      </option>

                      <option className="bg-[#211d1c]">
                        Hair Spa
                      </option>

                      <option className="bg-[#211d1c]">
                        Facial
                      </option>

                      <option className="bg-[#211d1c]">
                        Manicure
                      </option>

                      <option className="bg-[#211d1c]">
                        Pedicure
                      </option>

                      <option className="bg-[#211d1c]">
                        Men's Grooming
                      </option>

                      <option className="bg-[#211d1c]">
                        Bridal
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                      Preferred Stylist
                    </label>

                    <select
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition focus:border-[#d8af7a]"
                    >
                      <option value="" className="bg-[#211d1c]">
                        No preference
                      </option>

                      <option className="bg-[#211d1c]">
                        Senior Stylist
                      </option>

                      <option className="bg-[#211d1c]">
                        Hair Specialist
                      </option>

                      <option className="bg-[#211d1c]">
                        Beauty Specialist
                      </option>
                    </select>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40">
                      <CalendarDays size={13} />
                      Date
                    </label>

                    <input
                      required
                      type="date"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition focus:border-[#d8af7a]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40">
                      <Clock3 size={13} />
                      Time
                    </label>

                    <input
                      required
                      type="time"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition focus:border-[#d8af7a]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Anything we should know?
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Tell us about your appointment..."
                    className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#d8af7a]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-[#d8af7a] px-6 py-4 text-sm font-medium text-[#171313] transition hover:bg-[#e5c494]"
                >
                  Request Appointment

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </button>

                <p className="text-center text-[11px] leading-5 text-white/30">
                  Your appointment will be confirmed by our team.
                </p>
              </form>
            )}
          </motion.div>

          {/* ================= RIGHT — EXPERIENCE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[650px] flex-col justify-between overflow-hidden bg-[#d8af7a] p-8 text-[#171313] md:p-12 lg:p-14"
          >

            {/* Decorative 11 */}
            <div className="pointer-events-none absolute -right-10 -top-10 select-none font-serif text-[260px] leading-none text-black/[0.06]">
              11
            </div>

            <div className="relative">

              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                The 11.11 Experience
              </p>

              <h3 className="mt-5 max-w-md text-4xl font-light leading-tight md:text-5xl">
                Take a little time
                <br />
                <span className="font-serif italic">
                  for yourself.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-black/60">
                Whether you're getting ready for something special
                or simply need a little reset, we'll make your
                appointment feel worth the time.
              </p>
            </div>

            {/* Benefits */}
            <div className="relative my-12 space-y-5">

              <div className="flex items-start gap-4 border-t border-black/15 pt-5">
                <CheckCircle2
                  size={19}
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium">
                    Personal consultation
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    We understand your style before we begin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-black/15 pt-5">
                <CheckCircle2
                  size={19}
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium">
                    Tailored services
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Every service is adapted to your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-black/15 pt-5">
                <CheckCircle2
                  size={19}
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm font-medium">
                    Unisex beauty studio
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Hair, beauty and grooming under one roof.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact */}
            <div className="relative border-t border-black/15 pt-7">

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/45">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm">
                     Vinayak Apartment, 41, Jaitala Rd, Parsodi, Subhash Nagar, Nagpur, Maharashtra 440022  
                     </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1.5} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/45">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm">
                      +91 8007861113 , +91 8007861119
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book;