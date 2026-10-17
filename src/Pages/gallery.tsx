
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, X } from "lucide-react";

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
import Social from "../Components/Social";

type GalleryCategory =
  | "All"
  | "Salon"
  | "Hair"
  | "Beauty"
  | "Nails"
  | "Spa";

interface GalleryItem {
  image: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  number: string;
}

const galleryItems: GalleryItem[] = [
  { image: gallery1, title: "Inside 11.11", category: "Salon", number: "01" },
  { image: gallery2, title: "The Hair Edit", category: "Hair", number: "02" },
  { image: gallery3, title: "Beauty in Detail", category: "Beauty", number: "03" },
  { image: gallery4, title: "Nail Stories", category: "Nails", number: "04" },
  { image: gallery5, title: "The Self-Care Edit", category: "Spa", number: "05" },
  { image: gallery6, title: "A New Perspective", category: "Hair", number: "06" },
  { image: gallery7, title: "The Beauty Room", category: "Beauty", number: "07" },
  { image: gallery8, title: "Little Details", category: "Nails", number: "08" },
  { image: gallery9, title: "Salon Moments", category: "Salon", number: "09" },
  { image: gallery10, title: "Your Time to Unwind", category: "Spa", number: "10" },
  { image: gallery11, title: "The Final Look", category: "Beauty", number: "11" },
];

const filters: GalleryCategory[] = [
  "All",
  "Salon",
  "Hair",
  "Beauty",
  "Nails",
  "Spa",
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] =
    useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <>

    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f5eee6] px-6 py-24 text-[#171313] md:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d8af7a]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#d8af7a]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-[#171313]/10 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#9b7044]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b7044]">
                The 11.11 Gallery
              </span>
            </div>

            <h2 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              A closer look
              <br />
              <span className="italic text-[#9b7044]">
                at beautiful moments.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#171313]/60 md:text-base">
            From the atmosphere of our salon to the details of every
            finished look, discover the world of 11.11 Salon & Spa.
          </p>
        </motion.div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                activeFilter === filter
                  ? "border-[#171313] bg-[#171313] text-[#f5eee6]"
                  : "border-[#171313]/15 text-[#171313]/60 hover:border-[#9b7044] hover:text-[#9b7044]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.button
                key={item.number}
                type="button"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
                className={`group relative block w-full overflow-hidden rounded-xl bg-[#e7ddd1] text-left ${
                  index === 0 || index === 5
                    ? "aspect-[4/5]"
                    : "aspect-[4/5]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />

                <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  {item.category}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-5">
                  <div>
                    <p className="text-[9px] tracking-[0.18em] text-white/65">
                      {item.number} / 11
                    </p>
                    <h3 className="mt-1 font-serif text-lg sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/45 transition group-hover:border-[#d8af7a] group-hover:bg-[#d8af7a] group-hover:text-[#171313]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#171313]/10 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Camera className="h-5 w-5 text-[#9b7044]" />
            <p className="text-sm text-[#171313]/60">
              Real moments. Beautiful details. The 11.11 experience.
            </p>
          </div>

          <a
            href="#social"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-[#171313] px-6 py-3.5 text-xs font-medium text-[#f5eee6] transition hover:bg-[#9b7044] sm:self-auto"
          >
            Follow Our Journey
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] max-w-5xl overflow-hidden rounded-xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />
              <div className="flex items-center justify-between gap-4 bg-[#171313] px-5 py-4 text-[#f5eee6]">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8af7a]">
                    {selectedImage.category}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">
                    {selectedImage.title}
                  </h3>
                </div>
                <span className="text-xs text-white/45">
                  {selectedImage.number} / 11
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

  

   
{/* TRANSFORMATION SPOTLIGHT */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20 overflow-hidden rounded-3xl bg-[#171313] text-[#f5eee6]"
>
  <div className="grid lg:grid-cols-2">
    <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d8af7a]/20" />

      <div className="relative">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8af7a]">
          Beyond the Ordinary
        </p>

        <h3 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
          Every look has
          <br />
          <span className="italic text-[#d8af7a]">
            a story.
          </span>
        </h3>

        <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
          From a fresh haircut to a complete beauty transformation,
          discover the artistry and attention to detail behind
          every 11.11 experience.
        </p>
      </div>

      <div className="relative mt-10 flex items-center gap-3">
        <span className="h-px w-10 bg-[#d8af7a]" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
          The Transformation Edit
        </span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2 p-3 sm:p-4">
      <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-white/5">
        <img
          src={gallery2}
          alt="Hair look before transformation"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          The Starting Point
        </span>
      </div>

      <div className="relative mt-8 min-h-[280px] overflow-hidden rounded-2xl bg-white/5">
        <img
          src={gallery11}
          alt="Finished beauty look"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-[#d8af7a] px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#171313]">
          The Final Look
        </span>
      </div>
    </div>
  </div>
</motion.div>

 <Social />
 
   </>
  );
};

export default Gallery;
