import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "I walked in knowing I wanted a change, but wasn't sure what would suit me. The stylist actually listened and the final look felt completely like me.",
    name: "Aarohi Mehta",
    service: "Hair Styling",
    location: "11.11 Salon",
  },
  {
    quote:
      "The entire experience felt relaxed and personal. From the consultation to the final finish, everything was handled with so much attention to detail.",
    name: "Riya Kapoor",
    service: "Hair Colour",
    location: "11.11 Salon",
  },
  {
    quote:
      "I booked my bridal appointment here and loved how calm the whole process was. The team understood exactly what I wanted without making it feel overwhelming.",
    name: "Ananya Shah",
    service: "Bridal Beauty",
    location: "11.11 Salon",
  },
  {
    quote:
      "Finally found a salon where men's grooming doesn't feel rushed. Great consultation, great haircut and an excellent finish.",
    name: "Karan Malhotra",
    service: "Men's Grooming",
    location: "11.11 Salon",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0c0b0b] px-6 py-24 text-[#f4eadb] md:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8af7a]">
            Client Stories
          </p>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Loved by people.
            <br />
            <span className="font-serif italic text-[#d8af7a]">
              Remembered for the experience.
            </span>
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="relative mx-auto max-w-5xl">

          {/* Quote icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8af7a]/30 text-[#d8af7a]">
              <Quote size={22} strokeWidth={1.3} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="mb-8 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    className="text-[#d8af7a]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mx-auto max-w-4xl text-2xl font-light leading-relaxed md:text-4xl md:leading-[1.35]">
                “{testimonial.quote}”
              </blockquote>

              {/* Customer */}
              <div className="mt-10">
                <p className="text-sm font-medium">
                  {testimonial.name}
                </p>

                <div className="mt-2 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  <span>{testimonial.service}</span>

                  <span className="h-1 w-1 rounded-full bg-[#d8af7a]" />

                  <span>{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-14 flex items-center justify-center gap-6">

            <button
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#d8af7a] hover:text-[#d8af7a]"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-8 bg-[#d8af7a]"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#d8af7a] hover:text-[#d8af7a]"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Your experience matters to us
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;