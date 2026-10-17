
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Clock3,
  Sparkles,
  ChevronDown,
  Scissors,
//   Heart,
  Hand,
  Palette,
  Flower2,
  X,
} from "lucide-react";

// const gold = "#d8b36a";

type ServiceRow = {
  service: string;
  prices: string[];
  note?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  columns: string[];
  rows: ServiceRow[];
  group: string;
};

const categories: ServiceCategory[] = [
  {
    id: "waxing",
    title: "Waxing, Bleach & De-Tan",
    subtitle: "Choose your preferred treatment",
    columns: ["Regular (₹)", "Italian (₹)", "Bleach (₹)", "De-Tan (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Face & Neck", prices: ["300", "500", "450", "450"] },
      { service: "Full Arms", prices: ["350", "600", "500", "700"] },
      { service: "Full Legs", prices: ["500", "800", "700", "900"] },
      { service: "Full Front", prices: ["500", "700", "500", "700"] },
      { service: "Full Back", prices: ["500", "700", "500", "700"] },
      { service: "Full Bikini", prices: ["-", "1100", "-", "-"] },
      { service: "Full Body", prices: ["2100", "3100", "2100", "3600"] },
      { service: "Half Arms", prices: ["300", "450", "350", "500"] },
      { service: "Half Legs", prices: ["400", "600", "400", "500"] },
      { service: "Half Back", prices: ["400", "400", "400", "500"] },
      { service: "Under Arms", prices: ["250", "300", "280", "350"] },
      { service: "Feet / Palm", prices: ["300", "400", "400", "500"] },
      { service: "Butts", prices: ["400", "500", "400", "500"] },
      { service: "Stomach", prices: ["300", "500", "400", "500"] },
    ],
  },
  {
    id: "cleanup",
    title: "Cleanup",
    subtitle: "30–45 minutes",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Fruit", prices: ["700"] },
      { service: "Acne Skin", prices: ["800"] },
      { service: "Sensitive Skin", prices: ["900"] },
      { service: "Instant Glow", prices: ["1000"] },
      { service: "O3+ Whitening", prices: ["1200"] },
    ],
  },
  {
    id: "facial",
    title: "Facial",
    subtitle: "60 minutes",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Fruit", prices: ["1000"] },
      { service: "Silver", prices: ["1200"] },
      { service: "All Organic", prices: ["1400"] },
      { service: "Aroma Neem", prices: ["1500"] },
      { service: "Chocolate Delight", prices: ["1700"] },
      { service: "Luxury Gold", prices: ["1800"] },
      { service: "O3+ Whitening/Seaweed", prices: ["2500"] },
      { service: "Diamond", prices: ["3000"] },
      { service: "Anti Tan", prices: ["2700"] },
      { service: "Skin Brightening", prices: ["3500"] },
    ],
  },
  {
    id: "threading",
    title: "Threading",
    subtitle: "Precision and definition",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Eyebrow", prices: ["70"] },
      { service: "Jawline", prices: ["100"] },
      { service: "Face", prices: ["250"] },
      {
        service: "Chin / Forehead / Lower Lip / Upper Lip",
        prices: ["30"],
      },
    ],
  },
  {
    id: "keratin",
    title: "Keratin Treatment",
    subtitle: "Prices vary by hair length",
    columns: ["Keratin (₹)", "Botox (₹)", "Nano Plastia (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Up to Shoulder", prices: ["6200+", "7200+", "8200+"] },
      { service: "Below Shoulder", prices: ["7200+", "8200+", "9200+"] },
      { service: "Up to Waist", prices: ["8200+", "10200+", "11200+"] },
    ],
  },
  {
    id: "texture",
    title: "Texture Services — Female",
    subtitle: "Prices vary by hair length",
    columns: [
      "Smoothing (₹)",
      "Straightening (₹)",
      "Rebonding (₹)",
      "Smartbond (₹)",
    ],
    group: "Hair Services",
    rows: [
      { service: "Up to Shoulder", prices: ["4200+", "4700+", "5700+", "6700+"] },
      { service: "Below Shoulder", prices: ["5200+", "5700+", "6700+", "7700+"] },
      { service: "Up to Waist", prices: ["6200+", "6700+", "8700+", "9700+"] },
      { service: "Below Waist", prices: ["7200+", "7700+", "9700+", "10700+"] },
    ],
  },
  {
    id: "hand-foot",
    title: "Hand & Foot Services",
    subtitle: "Manicure, pedicure and massage",
    columns: ["Manicure (₹)", "Pedicure (₹)"],
    group: "Hand Foot & Nails",
    rows: [
      {
        service: "Regular — Cleaning & Gentle Massage",
        prices: ["700", "800"],
      },
      {
        service: "Aroma — Cleaning, Exfoliation & Cooling Foot Pack",
        prices: ["800", "900"],
      },
      {
        service: "Crystal — Cleaning, Exfoliation, Spa Massage & Brightening Foot Pack",
        prices: ["900", "1000"],
      },
      {
        service: "Luxury — Gentle Peeling, Cleaning, Exfoliation, Deep Tissue Massage & Brightening Foot Pack",
        prices: ["1100", "1200"],
      },
      { service: "Foot Massage (30 Minutes)", prices: ["800", "-"] },
    ],
  },
  {
    id: "nails",
    title: "Nail Services",
    subtitle: "Rates are per 10 nails",
    columns: ["Price (₹)"],
    group: "Hand Foot & Nails",
    rows: [
      { service: "Quick Dry", prices: ["100"] },
      { service: "Nail Cutting & Filing", prices: ["150"] },
      { service: "Nail Polishing", prices: ["100"] },
      { service: "Onwards Gel Top Coat", prices: ["300"] },
      { service: "French Nail Polishing", prices: ["400"] },
      { service: "Natural Nail Treatment", prices: ["400"] },
      { service: "Per Sitting Nail Art", prices: ["400"] },
      { service: "French Gel Nail Polishing", prices: ["600"] },
      { service: "Nail Refilling", prices: ["1500"] },
      { service: "Gel Nail Extension", prices: ["3000"] },
      { service: "Acrylic Nail Extension", prices: ["3000"] },
    ],
  },
  {
    id: "haircuts",
    title: "Hair Services",
    subtitle: "Haircut, styling and grooming",
    columns: ["Female (₹)", "Male (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Creative Hair Cut", prices: ["600", "400"] },
      { service: "Hair Cut", prices: ["500", "300"] },
      { service: "Fringe Cutting", prices: ["200", "-"] },
      { service: "Beard Trimming", prices: ["-", "100"] },
      { service: "Beard Styling", prices: ["-", "200"] },
      { service: "Moustache Styling", prices: ["-", "100"] },
      { service: "Shaving", prices: ["-", "150"] },
      { service: "Chest Hair Trimming", prices: ["-", "400"] },
      { service: "Back Hair Trimming", prices: ["-", "400"] },
      {
        service: "Shampoo & Conditioning (Natural Styling)",
        prices: ["300", "200"],
      },
      { service: "Blow Dry (Regular)", prices: ["400", "-"] },
      { service: "Blow Dry (Out curl or Straight)", prices: ["500", "-"] },
    ],
  },
  {
    id: "styling",
    title: "Ironing, Tongs, Iron Curls & Crimping",
    subtitle: "Prices vary by hair length",
    columns: ["Price (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Up to Shoulder", prices: ["800+"] },
      { service: "Below Shoulder", prices: ["900+"] },
      { service: "Up to Waist", prices: ["1000+"] },
      { service: "Below Waist", prices: ["1200+"] },
    ],
  },
  {
    id: "anti-aging",
    title: "Anti-Aging Facials",
    subtitle: "75 minutes",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Mini Lift", prices: ["1700"] },
      { service: "Hydrating Facial", prices: ["2700"] },
      { service: "Collagen Facial", prices: ["3200"] },
      { service: "Anti Acne Treatment", prices: ["3200"] },
      { service: "Forever Young", prices: ["3200"] },
      { service: "Platinum", prices: ["4200"] },
    ],
  },
  {
    id: "treatment-facials",
    title: "Treatment Facials",
    subtitle: "90 minutes",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "O3+ Luxury Diamond", prices: ["3700"] },
      { service: "Raaga Signature", prices: ["4700"] },
      { service: "Casmara Super Luxury", prices: ["5700"] },
    ],
  },
  {
    id: "hair-treatment-a",
    title: "Hair Treatment — Price List A",
    subtitle: "Prices start from the listed amount",
    columns: ["Female (₹)", "Male (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Head Massage", prices: ["800+", "700+"] },
      { service: "Anti-Dandruff Treatment", prices: ["1000+", "900+"] },
      { service: "Hair Spa", prices: ["1000+", "900+"] },
      { service: "Powermix", prices: ["1700+", "1400+"] },
      {
        service: "SERIOXYL Anti Hair Loss Treatment",
        prices: ["2700+", "2200+"],
      },
      { service: "Keratin Spa", prices: ["2200+", "1700+"] },
    ],
  },
  {
    id: "highlights-single",
    title: "Highlights — Single Color",
    subtitle: "Prices vary by hair length",
    columns: ["Regular (₹)", "Italian (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Per Streaks", prices: ["400", "-"] },
      { service: "Up to Shoulder", prices: ["3000+", "1500+"] },
      { service: "Below Shoulder", prices: ["3500+", "-"] },
      { service: "Up to Waist", prices: ["4500+", "-"] },
      { service: "Below Waist", prices: ["5500+", "-"] },
    ],
  },
  {
    id: "highlights-double",
    title: "Highlights — Double Color",
    subtitle: "Prices vary by hair length",
    columns: ["Regular (₹)", "Italian (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Up to Shoulder", prices: ["3500+", "2500+"] },
      { service: "Below Shoulder", prices: ["4000+", "-"] },
      { service: "Up to Waist", prices: ["5500+", "-"] },
      { service: "Below Waist", prices: ["6500+", "-"] },
    ],
  },
  {
    id: "hair-treatment-b",
    title: "Hair Treatment — Price List B",
    subtitle: "Separate source price list",
    columns: ["Female (₹)", "Male (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Head Massage", prices: ["600+", "500+"] },
      { service: "Anti-Dandruff Treatment", prices: ["800+", "700+"] },
      { service: "Hair Spa", prices: ["800+", "700+"] },
      { service: "Powermix", prices: ["1500+", "1200+"] },
      {
        service: "SERIOXYL Anti Hair Loss Treatment",
        prices: ["2500+", "2000+"],
      },
      { service: "Keratin Spa", prices: ["2000+", "1500+"] },
    ],
  },
  {
    id: "male-color",
    title: "Hair Coloring — Male",
    subtitle: "Global, beard and moustache color",
    columns: ["Price (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Moustache Coloring", prices: ["100"] },
      { service: "Beard Coloring", prices: ["300"] },
      { service: "Global Color", prices: ["800"] },
      { service: "Moustache Coloring (Ammonia Free)", prices: ["150"] },
      { service: "Beard Coloring (Ammonia Free)", prices: ["600"] },
      { service: "Global Color (Ammonia Free)", prices: ["1200"] },
    ],
  },
  {
    id: "female-color",
    title: "Global Hair Coloring — Female",
    subtitle: "Prices vary by hair length",
    columns: ["Price (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Touch Up", prices: ["800"] },
      { service: "Up to Shoulder", prices: ["2500+"] },
      { service: "Below Shoulder", prices: ["3000+"] },
      { service: "Up to Waist", prices: ["3500+"] },
      { service: "Below Waist", prices: ["4500+"] },
    ],
  },
  {
    id: "female-color-ammonia",
    title: "Global Hair Coloring — Female (Ammonia Free)",
    subtitle: "Prices vary by hair length",
    columns: ["Price (₹)"],
    group: "Hair Services",
    rows: [
      { service: "Touch Up", prices: ["1200"] },
      { service: "Up to Shoulder", prices: ["3000+"] },
      { service: "Below Shoulder", prices: ["3500+"] },
      { service: "Up to Waist", prices: ["4500+"] },
      { service: "Below Waist", prices: ["5500+"] },
    ],
  },
  {
    id: "makeup",
    title: "Makeup Services",
    subtitle: "In-salon and outdoor options",
    columns: ["In-Salon (₹)", "Outdoor (₹)"],
    group: "Makeup & Body",
    rows: [
      { service: "Bouffant", prices: ["500", "500"] },
      { service: "Saree Draping", prices: ["500", "700"] },
      { service: "Hair Styling", prices: ["1000", "1000"] },
      { service: "Touch Up", prices: ["3000", "3000"] },
      { service: "Simple Makeup", prices: ["3000", "5000"] },
      { service: "Party Makeup", prices: ["4000", "6000"] },
      { service: "Reception", prices: ["5000", "7000"] },
      { service: "Engagement", prices: ["6000", "8000"] },
      { service: "Sangeet / Cocktail Party", prices: ["8000", "10000"] },
      { service: "Bridal", prices: ["8000", "10000"] },
      { service: "HD Bridal Makeup", prices: ["10000", "13000"] },
      { service: "Air Brush Bridal Makeup", prices: ["15000", "20000"] },
    ],
  },
  {
    id: "skin-polishing",
    title: "Skin Polishing",
    subtitle: "Body and skin polishing treatments",
    columns: ["Price (₹)"],
    group: "Skin & Facial",
    rows: [
      { service: "Hands Skin Polishing", prices: ["2000"] },
      { service: "Half Back Polishing", prices: ["2000"] },
      { service: "Back Skin Polishing", prices: ["2500"] },
      { service: "Legs Skin Polishing", prices: ["2500"] },
      { service: "Face Skin Polishing", prices: ["3000"] },
      { service: "Herbal Body Polishing", prices: ["4000"] },
      { service: "Gold Body Polishing", prices: ["5000"] },
      { service: "Royal Body Polishing", prices: ["6000"] },
      { service: "Bridal Body Polishing", prices: ["7000"] },
    ],
  },
  {
    id: "body-scrub",
    title: "Body Scrub & Wraps",
    subtitle: "Body care treatments",
    columns: ["Price (₹)"],
    group: "Makeup & Body",
    rows: [
      { service: "Mud", prices: ["4000"] },
      { service: "Herbal Wrap", prices: ["5000"] },
      { service: "Algae/Seaweed", prices: ["3000"] },
      { service: "Cellulite", prices: ["6000"] },
    ],
  },
];

const extraNotes = [
  "Male waxing services: add ₹250 extra where applicable.",
  "GST will be charged extra on all services as applicable.",
  "Hair services require professional hair wash.",
  "Tong, roller or ironing styling on a haircut: ₹200 extra.",
  "Hair wash on hair with oil applied at home: ₹100 extra.",
  "Hair wash on henna/color-applied hair at home: ₹500 extra.",
  "Membership card must be presented at the counter to redeem a discount.",
  "Only one discount option can be redeemed on one bill.",
  "Please arrive 10 minutes before your appointment. A 10–15 minute wait may still occur.",
  "Please check in 5 minutes before your appointment. Walk-in customers may replace late appointments.",
];

const filters = [
  "All Services",
  "Hair Services",
  "Skin & Facial",
  "Hand Foot & Nails",
  "Makeup & Body",
];

const categoryIcons: Record<string, typeof Scissors> = {
  "Hair Services": Scissors,
  "Skin & Facial": Sparkles,
  "Hand Foot & Nails": Hand,
  "Makeup & Body": Palette,
};

const Services = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Services");
  const [expanded, setExpanded] = useState<string | null>("haircuts");

  const visibleCategories = useMemo(() => {
    const term = search.trim().toLowerCase();

    return categories
      .filter(
        (category) =>
          activeFilter === "All Services" ||
          category.group === activeFilter
      )
      .map((category) => ({
        ...category,
        rows: category.rows.filter((row) => {
          const searchable = [
            category.title,
            category.subtitle,
            row.service,
            category.group,
            ...row.prices,
          ]
            .join(" ")
            .toLowerCase();

          return !term || searchable.includes(term);
        }),
      }))
      .filter((category) => category.rows.length > 0);
  }, [search, activeFilter]);

  const totalServices = categories.reduce(
    (total, category) => total + category.rows.length,
    0
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0b0c] text-[#f7efe7]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#171313]">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d8b36a]/10 blur-[100px]" />
        <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-[#d8b36a]/5 blur-[90px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d8b36a] sm:text-xs">
              <span className="h-px w-10 bg-[#d8b36a]" />
              11.11 Salon & Spa
            </p>

            <h1 className="font-serif text-5xl leading-[1.08] sm:text-7xl lg:text-8xl">
              The Art of
              <span className="block italic text-[#d8b36a]">Self-Care.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#b9afa7] sm:text-base sm:leading-8">
              Discover our complete salon menu, from hair and skin treatments
              to nails, makeup and body care. Find the service that feels right
              for you.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#service-menu"
                className="inline-flex items-center gap-3 bg-[#d8b36a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#171313] transition-colors hover:bg-[#edcf98]"
              >
                Explore Service Menu
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/918007861113?text=Hi%2011.11%20Salon%20%26%20Spa%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.12em] text-[#f7efe7] transition-colors hover:border-[#d8b36a] hover:text-[#d8b36a]"
              >
                Enquire on WhatsApp
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-7 sm:grid-cols-4 sm:gap-6">
            {[
              { label: "Service Categories", value: "23" },
              { label: "Listed Treatments", value: String(totalServices) },
              { label: "Pricing", value: "In ₹" },
              { label: "Opening Hours", value: "10 AM – 10 PM" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-[#d8b36a] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#9c9290] sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTERS */}
      <section id="service-menu" className="scroll-mt-28 bg-[#0d0b0c]">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-16">
          <div className="mb-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
              Find Your Service
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              Explore the menu.
            </h2>
          </div>

          <div className="relative max-w-2xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d8b36a]"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search services, treatments or prices..."
              aria-label="Search salon services"
              className="w-full border border-white/15 bg-[#171313] py-4 pl-12 pr-12 text-sm text-[#f7efe7] outline-none transition-colors placeholder:text-[#817773] focus:border-[#d8b36a]/70"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa09a] hover:text-[#d8b36a]"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setExpanded(null);
                }}
                className={`border px-4 py-3 text-[10px] font-medium uppercase tracking-[0.08em] transition-colors sm:text-[11px] ${
                  activeFilter === filter
                    ? "border-[#d8b36a] bg-[#d8b36a] text-[#171313]"
                    : "border-white/15 text-[#b9afa7] hover:border-[#d8b36a]/60 hover:text-[#d8b36a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <p className="text-xs text-[#aaa09a]">
              Showing{" "}
              <span className="text-[#d8b36a]">
                {visibleCategories.reduce(
                  (sum, category) => sum + category.rows.length,
                  0
                )}
              </span>{" "}
              services across{" "}
              <span className="text-[#d8b36a]">
                {visibleCategories.length}
              </span>{" "}
              categories
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.15em] text-[#817773] sm:block">
              All prices in Indian Rupees
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY SERVICE LIST */}
      <section className="bg-[#0d0b0c] pb-20">
        <div className="mx-auto max-w-[1400px] space-y-4 px-6 sm:space-y-5 sm:px-10 lg:px-16">
          {visibleCategories.map((category, index) => {
            const Icon = categoryIcons[category.group] || Flower2;
            const isExpanded =
              expanded === category.id ||
              search.trim().length > 0 ||
              activeFilter !== "All Services";

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.2) }}
                className="overflow-hidden border border-white/10 bg-[#121010]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : category.id)
                  }
                  aria-expanded={isExpanded}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.025] sm:p-7"
                >
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8b36a]/30 bg-[#d8b36a]/5 text-[#d8b36a] sm:h-12 sm:w-12">
                      <Icon size={20} strokeWidth={1.4} />
                    </span>

                    <div className="min-w-0">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d8b36a]">
                        {category.group}
                      </p>
                      <h3 className="font-serif text-xl leading-tight sm:text-2xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-[#9c9290]">
                        {category.subtitle}
                      </p>
                      <p className="mt-2 text-[10px] text-[#817773]">
                        {category.rows.length} listed services
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#d8b36a] transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[420px] border-collapse text-left">
                        <thead>
                          <tr className="bg-[#201b18]">
                            <th className="px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#d8b36a] sm:px-7">
                              Service
                            </th>

                            {category.columns.map((column) => (
                              <th
                                key={column}
                                className="px-4 py-4 text-right text-[9px] font-semibold uppercase tracking-[0.08em] text-[#d8b36a] sm:px-6"
                              >
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {category.rows.map((row, rowIndex) => (
                            <tr
                              key={`${category.id}-${row.service}`}
                              className={`border-t border-white/[0.07] transition-colors hover:bg-[#d8b36a]/[0.04] ${
                                rowIndex % 2 === 0
                                  ? "bg-transparent"
                                  : "bg-white/[0.015]"
                              }`}
                            >
                              <td className="max-w-[420px] px-5 py-4 text-xs leading-6 text-[#e5ddd4] sm:px-7 sm:text-sm">
                                {row.service}
                              </td>

                              {row.prices.map((price, priceIndex) => (
                                <td
                                  key={`${row.service}-${priceIndex}`}
                                  className={`whitespace-nowrap px-4 py-4 text-right text-xs sm:px-6 sm:text-sm ${
                                    price === "-"
                                      ? "text-[#6f6661]"
                                      : "font-medium text-[#d8b36a]"
                                  }`}
                                >
                                  {price === "-" ? "—" : `₹${price}`}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {category.id === "waxing" && (
                      <p className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-[#aaa09a] sm:px-7">
                        <span className="text-[#d8b36a]">Note:</span> Male
                        services carry an additional ₹250 where applicable.
                      </p>
                    )}

                    {category.id === "nails" && (
                      <p className="border-t border-white/10 px-5 py-4 text-xs text-[#aaa09a] sm:px-7">
                        Rates are per 10 nails.
                      </p>
                    )}

                    {(category.id === "hair-treatment-a" ||
                      category.id === "hair-treatment-b") && (
                      <p className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-[#aaa09a] sm:px-7">
                        This price list is shown separately as supplied. Please
                        confirm the applicable list when enquiring.
                      </p>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}

          {visibleCategories.length === 0 && (
            <div className="border border-white/10 bg-[#121010] px-6 py-16 text-center">
              <Search size={28} className="mx-auto text-[#d8b36a]" />
              <h3 className="mt-5 font-serif text-2xl">
                No matching services found
              </h3>
              <p className="mt-3 text-sm text-[#aaa09a]">
                Try another service name or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All Services");
                  setExpanded("haircuts");
                }}
                className="mt-6 border border-[#d8b36a]/60 px-5 py-3 text-xs uppercase tracking-wider text-[#d8b36a] hover:bg-[#d8b36a] hover:text-[#171313]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PRICE NOTES */}
      <section className="border-t border-white/10 bg-[#171313] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d8b36a]">
              <span className="h-px w-8 bg-[#d8b36a]" />
              Before Your Visit
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              A few important details.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#aaa09a]">
              Please review the salon's service and appointment policies
              before your visit.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs text-[#c5bbb2]">
              <Clock3 size={17} className="text-[#d8b36a]" />
              Daily · 10:00 AM – 10:00 PM
            </div>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {extraNotes.map((note, index) => (
              <div
                key={note}
                className="flex gap-4 border-b border-white/10 py-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#d8b36a]/50 text-[9px] text-[#d8b36a]">
                  {index + 1}
                </span>
                <p className="text-xs leading-6 text-[#c2b9b0] sm:text-sm">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f1ec] px-6 py-20 text-center text-[#171313] sm:px-10 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="mx-auto mb-7 block h-px w-12 bg-[#d8b36a]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94733b]">
            Your Beauty Destination
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            Your next moment
            <br />
            <span className="italic text-[#b58b4b]">starts here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#766d66]">
            Have questions about a treatment or its pricing? Contact 11.11
            Salon & Spa to enquire about your preferred service.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918007861113?text=Hi%2011.11%20Salon%20%26%20Spa%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#171313] px-7 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#f7efe7] transition-colors hover:bg-[#b58b4b]"
            >
              Enquire on WhatsApp
              <ArrowRight size={16} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#171313]/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:border-[#b58b4b] hover:text-[#94733b]"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
