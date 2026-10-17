
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Scissors,
  Sparkles,
  Hand,
  Flower2,
  UserRound,
  Heart,
  X,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918007861113";

const categories = [
  { name: "All Services", icon: Sparkles },
  { name: "Hair", icon: Scissors },
  { name: "Skin", icon: Sparkles },
  { name: "Nails", icon: Hand },
  { name: "Makeup", icon: Heart },
  { name: "Grooming", icon: UserRound },
  { name: "Spa", icon: Flower2 },
];

const services = [
  {
    name: "Haircut & Styling",
    category: "Hair",
    description: "Haircuts, blow-dries and styling.",
  },
  {
    name: "Hair Colour",
    category: "Hair",
    description: "Global colour, highlights and colour services.",
  },
  {
    name: "Hair Treatments",
    category: "Hair",
    description: "Keratin, hair Botox, smoothing and more.",
  },
  {
    name: "Hair Spa",
    category: "Hair",
    description: "Hair and scalp care treatments.",
  },
  {
    name: "Facials",
    category: "Skin",
    description: "Glow, hydration and treatment facials.",
  },
  {
    name: "Cleanup & De-Tan",
    category: "Skin",
    description: "Refresh your skin with a suitable treatment.",
  },
  {
    name: "Skin Polishing",
    category: "Skin",
    description: "Explore available skin polishing services.",
  },
  {
    name: "Manicure & Pedicure",
    category: "Nails",
    description: "Nail care and hand and foot treatments.",
  },
  {
    name: "Nail Extensions & Art",
    category: "Nails",
    description: "Nail enhancements and creative nail designs.",
  },
  {
    name: "Bridal Makeup",
    category: "Makeup",
    description: "Makeup for weddings and special occasions.",
  },
  {
    name: "Party Makeup",
    category: "Makeup",
    description: "Looks for celebrations and events.",
  },
  {
    name: "Men's Haircut",
    category: "Grooming",
    description: "Haircuts tailored to your preferred style.",
  },
  {
    name: "Beard Styling",
    category: "Grooming",
    description: "Beard grooming and styling.",
  },
  {
    name: "Threading & Waxing",
    category: "Grooming",
    description: "Personal grooming services.",
  },
  {
    name: "Relaxation Treatments",
    category: "Spa",
    description: "Ask our team about available spa services.",
  },
  {
    name: "Body Scrub & Wraps",
    category: "Spa",
    description: "Explore available body-care treatments.",
  },
];

export default function PriceGuide() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [search, setSearch] = useState("");
  const [enquiryService, setEnquiryService] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    const term = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All Services" ||
        service.category === activeCategory;

      const matchesSearch =
        !term ||
        service.name.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const enquiryLink = (serviceName: string) =>
    `${WHATSAPP_LINK}?text=${encodeURIComponent(
      `Hi 11.11 Salon & Spa, I would like to know the price of ${serviceName}. Please share the available options and pricing.`
    )}`;

  return (
    <main className="overflow-hidden bg-[#f7efe7] text-[#211915]">
      {/* HERO */}
      <section className="relative bg-[#0d0b0c] px-6 py-24 text-[#f7efe7] sm:py-32 md:px-12 lg:px-20">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d8af7a]/10 blur-[110px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <p className="mb-7 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
            <span className="h-px w-8 bg-[#d8af7a]" />
            The 11.11 Price Guide
            <span className="h-px w-8 bg-[#d8af7a]" />
          </p>

          <h1 className="text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
            Beauty, made
            <br />
            <span className="font-serif italic text-[#d8af7a]">
              transparent.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            Explore our salon and spa services, discover what suits you,
            and speak with our team for personalised pricing.
          </p>

          <a
            href="#service-prices"
            className="mt-9 inline-flex items-center gap-3 bg-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#171313] transition hover:bg-[#f0d4ad]"
          >
            Explore Services
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              Find Your Service
            </p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Your beauty menu
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#79695e] md:justify-self-end">
            From hair and skin to nails, makeup and grooming, browse
            our service categories to find your next salon experience.
          </p>
        </div>
      </section>

      {/* PRICE GUIDE */}
      <section
        id="service-prices"
        className="scroll-mt-16 px-6 pb-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* SEARCH */}
          <div className="flex items-center gap-3 border border-[#d7c8b8] bg-[#fbf7f2] px-4 py-3">
            <Search size={19} className="shrink-0 text-[#a77d4b]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search haircuts, facials, nail services..."
              aria-label="Search services"
              className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-[#9a8a7d]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="text-[#79695e]"
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex shrink-0 items-center gap-2 border px-4 py-3 text-xs transition ${
                    active
                      ? "border-[#211915] bg-[#211915] text-[#f7efe7]"
                      : "border-[#d7c8b8] bg-transparent text-[#65564c] hover:border-[#a77d4b]"
                  }`}
                >
                  <Icon size={15} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* RESULTS */}
          <div className="mt-8 flex items-center justify-between border-b border-[#d7c8b8] pb-5">
            <h3 className="text-xl font-light sm:text-2xl">
              {activeCategory === "All Services"
                ? "Our Services"
                : activeCategory}
            </h3>
            <span className="text-xs text-[#79695e]">
              {filteredServices.length} services
            </span>
          </div>

          <div className="grid gap-4 pt-5 sm:grid-cols-2">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.025 }}
                className="flex flex-col justify-between border border-[#e1d4c7] bg-[#fbf7f2] p-5 transition hover:border-[#c5a174] sm:p-7"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#a77d4b]">
                    {service.category}
                  </p>
                  <h4 className="mt-3 text-xl font-light">
                    {service.name}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[#79695e]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e1d4c7] pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#968477]">
                      Service pricing
                    </p>
                    <p className="mt-1 text-sm text-[#211915]">
                      Enquire for price
                    </p>
                  </div>

                  <button
                    onClick={() => setEnquiryService(service.name)}
                    className="inline-flex shrink-0 items-center gap-2 border border-[#c8b49f] px-4 py-3 text-[10px] uppercase tracking-[0.12em] transition hover:border-[#211915] hover:bg-[#211915] hover:text-[#f7efe7]"
                  >
                    Enquire
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="py-20 text-center">
              <Search className="mx-auto text-[#a77d4b]" size={28} />
              <p className="mt-4 text-lg">No services found</p>
              <p className="mt-2 text-sm text-[#79695e]">
                Try another search term or category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Services");
                }}
                className="mt-5 border-b border-[#a77d4b] pb-1 text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {enquiryService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5"
          onClick={() => setEnquiryService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative w-full max-w-md bg-[#f7efe7] p-7 sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setEnquiryService(null)}
              aria-label="Close enquiry"
              className="absolute right-5 top-5 text-[#79695e]"
            >
              <X size={20} />
            </button>

            <p className="text-xs uppercase tracking-[0.25em] text-[#a77d4b]">
              11.11 Salon & Spa
            </p>
            <h3 id="enquiry-title" className="mt-4 text-2xl font-light">
              Ask about this service
            </h3>
            <p className="mt-3 text-sm text-[#79695e]">
              {enquiryService}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#79695e]">
              Contact our team to confirm the current price and available
              options for this service.
            </p>

            <a
              href={enquiryLink(enquiryService)}
              target="_blank"
              rel="noreferrer"
              className="mt-7 flex items-center justify-between bg-[#211915] px-5 py-4 text-xs uppercase tracking-[0.15em] text-[#f7efe7] transition hover:bg-[#382b23]"
            >
              Enquire on WhatsApp
              <ArrowUpRight size={17} className="text-[#d8af7a]" />
            </a>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#211915] px-6 py-20 text-center text-[#f7efe7] md:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d8af7a]">
          Need Help Choosing?
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight sm:text-5xl">
          Let’s find your
          <span className="font-serif italic text-[#d8af7a]">
            {" "}perfect service.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55">
          Contact our team for service details, current prices and
          appointment enquiries.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 border border-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-[#d8af7a] hover:text-[#171313]"
        >
          Contact Us
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
