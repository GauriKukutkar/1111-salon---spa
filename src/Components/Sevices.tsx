import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Scissors,
  Palette,
  Flower2,
  Hand,
  Crown,
  UserRound,
  Heart,
  Star,
  Gift,
  Clock3,
} from "lucide-react";

type Category =
  | "All"
  | "Hair"
  | "Skin"
  | "Nails"
  | "Makeup"
  | "Grooming"
  | "Spa"
  ;

interface Service {
  name: string;
  description: string;
  duration: string;
  price: string;
  category: Category;
  popular?: boolean;
}

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Hair", icon: Scissors },
  { name: "Skin", icon: Flower2 },
  { name: "Nails", icon: Hand },
  { name: "Makeup", icon: Palette },
  { name: "Grooming", icon: UserRound },
  { name: "Spa", icon: Crown },

];

const services: Service[] = [
  // HAIR
  {
    name: "Keratin, Botox & Nano Plastia",
    description: "Professional smoothing treatments for sleek, manageable hair.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Hair",
    popular: true,
  },
  {
    name: "Smoothing, Straightening & Rebonding",
    description: "Hair-texture services tailored to your preferred finish.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Hair",
    popular: true,
  },
  {
    name: "Signature Hair Highlights",
    description: "Single and double highlights for added dimension and depth.",
    duration: "Duration varies",
    price: "Explore colours",
    category: "Hair",
    popular: true,
  },
  {
    name: "Global Hair Colour",
    description: "Explore global colour and ammonia-free colour options.",
    duration: "Duration varies",
    price: "Explore colours",
    category: "Hair",
  },
  {
    name: "Hair Spa & Deep Conditioning",
    description: "A conditioning ritual for dry, dull and tired-looking hair.",
    duration: "45–60 min",
    price: "Explore treatments",
    category: "Hair",
    popular: true,
  },
  {
    name: "Haircut & Personalised Styling",
    description: "A tailored haircut finished with styling to suit your look.",
    duration: "45–60 min",
    price: "Explore services",
    category: "Hair",
  },
  {
    name: "Blow Dry, Curls & Iron Styling",
    description: "Smooth blowouts, curls, waves and polished occasion styling.",
    duration: "30–60 min",
    price: "Explore styling",
    category: "Hair",
  },
  {
    name: "Hair Treatments",
    description: "Explore professional hair-treatment options for your hair-care routine.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Hair",
  },

  // SKIN
  {
    name: "Anti-Aging Facial",
    description: "A specialised facial for smoother, refreshed-looking skin.",
    duration: "75 min",
    price: "Explore facials",
    category: "Skin",
    popular: true,
  },
  {
    name: "Treatment Facials",
    description: "Discover facial treatments suited to your skincare needs.",
    duration: "90 min",
    price: "Explore facials",
    category: "Skin",
  },
  {
    name: "Signature Glow Facial",
    description: "A refreshing facial ritual for a brighter-looking complexion.",
    duration: "60 min",
    price: "Explore facials",
    category: "Skin",
    popular: true,
  },
  {
    name: "Cleanup & Deep Cleansing",
    description: "Essential cleansing to refresh your everyday skincare routine.",
    duration: "30–45 min",
    price: "Explore services",
    category: "Skin",
  },
  {
    name: "De-Tan & Skin Brightening Care",
    description: "Explore de-tan and skin-refreshing treatment options.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Skin",
  },
  {
    name: "Skin Polishing",
    description: "Skin-polishing options for a refreshed, even-looking finish.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Skin",
    popular: true,
  },

  // NAILS
  {
    name: "Nail Extensions & Nail Art",
    description: "Creative nail extensions and detailed designs for your style.",
    duration: "Duration varies",
    price: "Explore nail services",
    category: "Nails",
    popular: true,
  },
  {
    name: "Gel Nails",
    description: "A glossy gel finish with your choice of colour.",
    duration: "60 min",
    price: "Explore nail services",
    category: "Nails",
  },
  {
    name: "Classic Manicure",
    description: "Nail shaping, cuticle care and a polished finish.",
    duration: "40 min",
    price: "Explore services",
    category: "Nails",
  },
  {
    name: "Pedicure Ritual",
    description: "Relaxing foot care with exfoliation and finishing treatment.",
    duration: "45–60 min",
    price: "Explore services",
    category: "Nails",
  },

  // MAKEUP
  {
    name: "Bridal & Engagement Makeup",
    description: "Personalised makeup for weddings and engagement celebrations.",
    duration: "Duration varies",
    price: "Enquire",
    category: "Makeup",
    popular: true,
  },
  {
    name: "Party & Occasion Makeup",
    description: "Celebration-ready makeup tailored to your outfit and occasion.",
    duration: "60–90 min",
    price: "Explore makeup",
    category: "Makeup",
    popular: true,
  },
  {
    name: "Professional Makeup & Hair Styling",
    description: "Coordinate your makeup and hairstyle for a complete occasion look.",
    duration: "Duration varies",
    price: "Enquire",
    category: "Makeup",
  },

  // GROOMING
  {
    name: "Men's Haircut & Styling",
    description: "A personalised haircut with a clean, polished finish.",
    duration: "30–45 min",
    price: "Explore services",
    category: "Grooming",
    popular: true,
  },
  {
    name: "Beard Styling & Trimming",
    description: "Beard shaping and detailing tailored to your personal style.",
    duration: "20–30 min",
    price: "Explore services",
    category: "Grooming",
  },
  {
    name: "Men's Hair Colour",
    description: "Explore hair-colour options for a refreshed, well-groomed look.",
    duration: "Duration varies",
    price: "Explore colours",
    category: "Grooming",
  },
  {
    name: "Men's Facial & Cleanup",
    description: "A refreshing grooming treatment for clean, comfortable-looking skin.",
    duration: "30–60 min",
    price: "Explore services",
    category: "Grooming",
  },
  {
    name: "Threading & Precision Grooming",
    description: "Detailed grooming for a neat, well-defined finish.",
    duration: "15–30 min",
    price: "Explore services",
    category: "Grooming",
  },
  {
    name: "Waxing & De-Tan",
    description: "Choose from grooming and hair-removal options for your needs.",
    duration: "Duration varies",
    price: "Explore services",
    category: "Grooming",
  },

  // SPA & BODY CARE
  {
    name: "Relaxing Spa Experience",
    description: "Make time to unwind with a dedicated self-care experience.",
    duration: "Enquire",
    price: "Enquire",
    category: "Spa",
    popular: true,
  },
  {
    name: "Body Scrubs & Exfoliation",
    description: "Body-care treatments designed to leave skin feeling refreshed.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Spa",
    popular: true,
  },
  {
    name: "Body Wraps",
    description: "An indulgent body-care ritual for your self-care routine.",
    duration: "Duration varies",
    price: "Explore treatments",
    category: "Spa",
  },
  {
    name: "Manicure & Pedicure Combo",
    description: "Combine hand and foot care for a complete grooming session.",
    duration: "Duration varies",
    price: "Explore services",
    category: "Spa",
  },
  {
    name: "Head Relaxation & Hair Spa",
    description: "A hair-care ritual designed to give your routine a relaxing reset.",
    duration: "45–60 min",
    price: "Explore treatments",
    category: "Spa",
  },
];


const Services = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0d0b0c] py-28 text-[#f7efe7] sm:py-36 lg:py-44"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#e96b5f]/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[#d8b36a]/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-0 font-serif text-[22rem] leading-none text-white/[0.02]">
        S
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d8b36a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
                The 11—11 Menu
              </span>

            </div>

            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Beauty,
              <br />
              <span className="italic text-[#d8b36a]">
                your way.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-[#9c9290]">
            From everyday grooming to your biggest celebrations,
            discover carefully curated services designed around
            your style, your time and your occasion.
          </p>

        </motion.div>

        {/* =====================================================
            SEASONAL OFFER
        ===================================================== */}

        <motion.div
          className="relative mt-16 overflow-hidden rounded-2xl border border-[#d8b36a]/25 bg-gradient-to-r from-[#24151a] to-[#171214]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Decorative glow */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e96b5f]/15 blur-[80px]" />

          <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            <div className="flex items-start gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8b36a]/10">
                <Gift className="h-5 w-5 text-[#d8b36a]" />
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#e96b5f]/15 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#f18a7f]">
                    Seasonal Edit
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#817679]">
                    Limited availability
                  </span>

                </div>

                <h3 className="mt-3 font-serif text-2xl text-[#fff7ef] sm:text-3xl">
                  Festive Glow Ritual
                </h3>

                <p className="mt-2 max-w-2xl text-xs leading-6 text-[#a69b99]">
                  Glow facial + hair styling + express manicure —
                  a complete pre-event beauty ritual.
                </p>

              </div>

            </div>

            <div className="flex shrink-0 items-center gap-5">

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#817679]">
                  Seasonal Package
                </p>

                <p className="mt-1 font-serif text-2xl text-[#d8b36a]">
                  Special Offer
                </p>
              </div>

              <a
                href="#contact"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#d8b36a] text-[#21151a] transition-transform duration-300 hover:rotate-45"
                aria-label="Book seasonal offer"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>

            </div>

          </div>
        </motion.div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="mt-14 overflow-x-auto pb-2">

          <div className="flex min-w-max gap-2">

            {categories.map((category) => {

              const Icon = category.icon;

              const isActive =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() =>
                    setActiveCategory(
                      category.name as Category
                    )
                  }
                  className={`group flex items-center gap-2 rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                    isActive
                      ? "border-[#d8b36a] bg-[#d8b36a] text-[#21151a]"
                      : "border-white/10 bg-white/[0.02] text-[#9d9390] hover:border-[#d8b36a]/50 hover:text-[#d8b36a]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {category.name}
                </button>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <motion.div
          layout
          className="mt-8 grid gap-3 md:grid-cols-2"
        >

          <AnimatePresence mode="popLayout">

            {filteredServices.map((service, index) => (

              <motion.div
                key={service.name}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.025,
                }}
                className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#d8b36a]/35 hover:bg-white/[0.045] sm:p-6"
              >

                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d8b36a]/0 blur-3xl transition-all duration-500 group-hover:bg-[#d8b36a]/10" />

                <div className="relative flex items-start justify-between gap-5">

                  <div className="flex min-w-0 gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8b36a]/20 bg-[#d8b36a]/[0.06]">
                      <Sparkles className="h-4 w-4 text-[#d8b36a]" />
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="font-serif text-xl text-[#f8efe7]">
                          {service.name}
                        </h3>

                        {service.popular && (
                          <span className="rounded-full bg-[#e96b5f]/15 px-2 py-1 text-[7px] font-bold uppercase tracking-[0.12em] text-[#f18a7f]">
                            Popular
                          </span>
                        )}

                      </div>

                      <p className="mt-2 max-w-lg text-xs leading-6 text-[#89807e]">
                        {service.description}
                      </p>

                      <div className="mt-4 flex items-center gap-4">

                        <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77706e]">
                          <Clock3 className="h-3 w-3 text-[#d8b36a]" />
                          {service.duration}
                        </span>

                        <span className="h-3 w-px bg-white/10" />

                        <span className="text-[10px] font-semibold text-[#d8b36a]">
                          {service.price}
                        </span>

                      </div>

                    </div>

                  </div>

                  <a
                    href="#contact"
                    className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#8c8380] transition-all duration-300 group-hover:border-[#d8b36a] group-hover:text-[#d8b36a] sm:flex"
                    aria-label={`Book ${service.name}`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* =====================================================
            FEATURED PACKAGES
        ===================================================== */}

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-7 flex items-end justify-between">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <Sparkles className="h-3.5 w-3.5 text-[#d8b36a]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d8b36a]">
                  Curated For You
                </span>

              </div>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Signature Packages
              </h3>

            </div>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {/* Package 1 */}

            <div className="group rounded-2xl border border-white/10 bg-[#171214] p-6 transition-all duration-300 hover:border-[#d8b36a]/30">

              <Crown className="h-5 w-5 text-[#d8b36a]" />

              <h4 className="mt-5 font-serif text-2xl">
                Date Ready
              </h4>

              <p className="mt-3 text-xs leading-6 text-[#89807e]">
                Hair styling + grooming + skin refresh for your
                special evening.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d8b36a]"
              >
                Book Package
                <ArrowUpRight className="h-3 w-3" />
              </a>

            </div>

            {/* Package 2 */}

            <div className="relative overflow-hidden rounded-2xl border border-[#d8b36a]/35 bg-[#21161a] p-6">

              <div className="absolute right-0 top-0 rounded-bl-xl bg-[#d8b36a] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#21151a]">
                Featured
              </div>

              <Heart className="h-5 w-5 text-[#e96b5f]" />

              <h4 className="mt-5 font-serif text-2xl">
                Self Care
              </h4>

              <p className="mt-3 text-xs leading-6 text-[#a89c9b]">
                Hair spa + glow facial + manicure for a complete
                reset.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d8b36a]"
              >
                Book Package
                <ArrowUpRight className="h-3 w-3" />
              </a>

            </div>

            {/* Package 3 */}

            <div className="group rounded-2xl border border-white/10 bg-[#171214] p-6 transition-all duration-300 hover:border-[#d8b36a]/30">

              <Star className="h-5 w-5 text-[#d8b36a]" />

              <h4 className="mt-5 font-serif text-2xl">
                Celebration
              </h4>

              <p className="mt-3 text-xs leading-6 text-[#89807e]">
                Makeup + hair styling + nails for your next
                celebration.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d8b36a]"
              >
                Book Package
                <ArrowUpRight className="h-3 w-3" />
              </a>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div>

            <p className="font-serif text-2xl text-[#f7efe7]">
              Not sure what to choose?
            </p>

            <p className="mt-1 text-xs text-[#817876]">
              Talk to our team and find the right service for you.
            </p>

          </div>

          <a
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#d8b36a] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#21151a] transition-all duration-300 hover:bg-[#f0d99f]"
          >
            Get A Consultation

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;