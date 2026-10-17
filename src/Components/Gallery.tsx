import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Maximize2,
} from "lucide-react";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery7.png";
import gallery5 from "../assets/gallery8.png";
import gallery6 from "../assets/gallery6.png";

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  className: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: gallery1,
    title: "Signature Hair",
    category: "Hair",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: gallery2,
    title: "The Beauty Ritual",
    category: "Beauty",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: gallery3,
    title: "Modern Styling",
    category: "Hair",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: gallery4,
    title: "Nail Details",
    category: "Nails",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    image: gallery5,
    title: "Bridal Beauty",
    category: "Bridal",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    image: gallery6,
    title: "Salon Moments",
    category: "Experience",
    className: "md:col-span-1 md:row-span-1",
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? galleryItems.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryItems.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#f5eee6] py-28 text-[#21151a] sm:py-36 lg:py-44"
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#e96b5f]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#d8b36a]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div>

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#e96b5f]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8b6d52]">
                  The 11—11 Gallery
                </span>

              </div>

              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-8xl">

                Looks worth

                <br />

                <span className="italic text-[#b58b4d]">
                  remembering.
                </span>

              </h2>

            </div>

            <div className="max-w-md">

              <p className="text-sm leading-7 text-[#706363]">
                A glimpse into the details, transformations and
                beauty moments that make the 11—11 experience
                different.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-3 border-b border-[#21151a] pb-2 text-[9px] font-bold uppercase tracking-[0.18em]"
              >
                Book Your Look

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#21151a] text-[#f5eee6] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>

            </div>
          </motion.div>

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <div className="mt-16 grid auto-rows-[240px] grid-cols-1 gap-3 sm:auto-rows-[280px] md:grid-cols-3 md:grid-rows-[280px_280px_280px]">

            {galleryItems.map((item, index) => (

              <motion.button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden text-left ${item.className}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >

                {/* Image */}

                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Top category */}

                <div className="absolute left-5 top-5">

                  <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {item.category}
                  </span>

                </div>

                {/* Expand icon */}

                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>

                {/* Bottom content */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <p className="font-serif text-2xl text-white sm:text-3xl">
                        {item.title}
                      </p>

                      <span className="mt-1 block text-[8px] uppercase tracking-[0.18em] text-white/65">
                        11—11 Beauty Atelier
                      </span>

                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d8b36a] text-[#21151a] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>

                  </div>

                </div>

              </motion.button>

            ))}

          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <motion.div
            className="mt-16 flex flex-col justify-between gap-6 border-t border-[#21151a]/15 pt-8 sm:flex-row sm:items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div>

              <p className="font-serif text-2xl">
                Your next look starts here.
              </p>

              <p className="mt-1 text-xs text-[#7d706e]">
                Bring the inspiration. We'll create the experience.
              </p>

            </div>

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-[#21151a] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#f5eee6] transition-all duration-300 hover:bg-[#d8b36a] hover:text-[#21151a]"
            >
              Start Your Appointment

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >

            {/* Close */}

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a]"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a] sm:left-8"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a] sm:right-8"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Image */}

            <motion.div
              className="relative flex max-h-[85vh] max-w-6xl items-center justify-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) => event.stopPropagation()}
            >

              <img
                src={galleryItems[selectedIndex].image}
                alt={galleryItems[selectedIndex].title}
                className="max-h-[78vh] max-w-full object-contain"
              />

              {/* Image caption */}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-5 pt-16">

                <p className="font-serif text-2xl text-white">
                  {galleryItems[selectedIndex].title}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#d8b36a]">
                  {galleryItems[selectedIndex].category}
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;