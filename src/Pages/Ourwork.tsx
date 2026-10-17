
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  X,
  Sparkles,
} from "lucide-react";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";

const workItems = [
  { image: gallery1, category: "Salon", title: "The 11.11 Experience" },
  { image: gallery2, category: "Hair", title: "A Fresh Hair Story" },
  { image: gallery3, category: "Makeup", title: "Soft Glam Edit" },
  { image: gallery4, category: "Nails", title: "Details That Matter" },
  { image: gallery5, category: "Skin", title: "A Little Skin Ritual" },
  { image: gallery6, category: "Hair", title: "The Perfect Finish" },
  { image: gallery7, category: "Makeup", title: "Beauty In Every Detail" },
  { image: gallery8, category: "Nails", title: "The Nail Edit" },
  { image: gallery9, category: "Spa", title: "Your Moment Of Calm" },
  { image: gallery10, category: "Hair", title: "Made For Your Style" },
  { image: gallery11, category: "Salon", title: "Inside Our World" },
];

const filters = [
  "All",
  "Hair",
  "Makeup",
  "Skin",
  "Nails",
  "Spa",
  "Salon",
];

export default function Ourwork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof workItems)[number] | null
  >(null);

  const filteredItems =
    activeFilter === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeFilter);

  return (
    <main className="overflow-hidden bg-[#f7efe7] text-[#211915]">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-[#0d0b0c] px-6 py-24 text-[#f7efe7] md:px-12 lg:px-20">
        <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-[#d8af7a]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#d8af7a]">
              <span className="h-px w-10 bg-[#d8af7a]" />
              The Art Of Beauty
            </p>

            <h1 className="max-w-2xl text-5xl font-light leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Our work.
              <br />
              <span className="font-serif italic text-[#d8af7a]">
                Your kind of beautiful.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/60">
              A collection of looks, details and beauty moments crafted
              at 11.11 Salon & Spa. Explore our work and find inspiration
              for your next visit.
            </p>

            <a
              href="#our-work-gallery"
              className="mt-10 inline-flex items-center gap-3 border border-[#d8af7a]/50 px-6 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-[#d8af7a] hover:text-[#0d0b0c]"
            >
              Explore Our Work
              <ArrowDown size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-4 border border-[#d8af7a]/30" />
            <img
              src={gallery2}
              alt="Beauty styling at 11.11 Salon and Spa"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-[#d8af7a] p-5 text-[#171313] sm:p-7">
              <Sparkles size={21} strokeWidth={1.3} />
              <p className="mt-3 font-serif text-2xl italic">The 11.11 Edit</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em]">
                Beauty, thoughtfully done
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#a77d4b]">
              More Than A Look
            </p>
            <h2 className="max-w-xl text-4xl font-light leading-tight sm:text-5xl">
              Every detail tells
              <span className="font-serif italic"> a story.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#6d5d52] md:justify-self-end">
            From a fresh new look to the little details that make you feel
            like yourself, our work is about personal style, thoughtful
            care and the confidence that comes with it.
          </p>
        </div>
      </section>

      {/* FILTERS + GALLERY */}
      <section
        id="our-work-gallery"
        className="scroll-mt-20 px-6 pb-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 border-b border-[#d7c8b8] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#a77d4b]">
                A Visual Journal
              </p>
              <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                Explore the collection
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2.5 text-xs tracking-wide transition ${
                    activeFilter === filter
                      ? "bg-[#211915] text-[#f7efe7]"
                      : "border border-[#d7c8b8] text-[#5d5048] hover:border-[#211915]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  layout
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: index * 0.025 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative block w-full overflow-hidden text-left"
                >
                  <div className="overflow-hidden bg-[#e9ded2]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-5 text-white opacity-100 transition">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#e6c398]">
                          {item.category}
                        </p>
                        <h3 className="text-xl font-light">{item.title}</h3>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-[#d8af7a] group-hover:bg-[#d8af7a] group-hover:text-[#171313]">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <p className="py-16 text-center text-[#6d5d52]">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171313] px-6 py-20 text-center text-[#f7efe7] md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
          Your Next Chapter
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
          Found a look you
          <span className="font-serif italic text-[#d8af7a]"> love?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55">
          Let’s make it yours. Get in touch with our team to plan your
          next salon or spa experience.
        </p>
        <a
          href="/contact"
          className="mt-9 inline-flex items-center gap-3 bg-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#171313] transition hover:bg-[#f0d4ad]"
        >
          Book Your Visit
          <ArrowUpRight size={16} />
        </a>
      </section>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white hover:text-black"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96 }}
              className="max-h-[90vh] max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] max-w-full object-contain"
              />
              <div className="mt-4 flex items-center justify-between gap-4 text-[#f7efe7]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d8af7a]">
                    {selectedImage.category}
                  </p>
                  <p className="mt-1 text-lg">{selectedImage.title}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-sm text-white/60 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
