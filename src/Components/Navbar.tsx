
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  Gift,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Salon & Spa Logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_NUMBER = "918007861113";
const whatsappMessage = encodeURIComponent(
  "Hi 11.11 Salon & Spa, I would like to know more about your services."
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname.toLowerCase() === path.toLowerCase() ||
      location.pathname.toLowerCase().startsWith(`${path.toLowerCase()}/`)
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* OFFER STRIP */}
      <div className="border-b border-[#d8b36a]/20 bg-[#171313]">
        <div className="mx-auto flex min-h-9 max-w-[1600px] items-center justify-center gap-2 px-3 text-center sm:gap-3">
          <Gift size={12} className="shrink-0 text-[#d8b36a]" />

          <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#e7dfd5] sm:text-[10px] sm:tracking-[0.2em]">
            <span className="text-[#d8b36a]">New Client Offer</span>
            <span className="mx-2 text-[#d8b36a]">·</span>
            <span>30% Off Your First Visit</span>
          </p>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="hidden items-center gap-1 border-b border-[#d8b36a]/60 pb-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#d8b36a] transition-colors hover:text-white sm:inline-flex"
          >
            Claim Offer
            <ArrowUpRight size={11} />
          </Link>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="border-b border-[#d8b36a]/20 bg-[#0d0b0c]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:h-[88px] lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="11.11 Salon & Spa home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="11.11 Salon & Spa"
              className="h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-85 sm:h-14 lg:h-[62px]"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative mx-1 px-3 py-3 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 2xl:px-4 ${
                    active
                      ? "text-[#d8b36a]"
                      : "text-[#bcb3ac] hover:text-[#f7efe7]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-3 right-3 h-px origin-center bg-[#d8b36a] transition-transform duration-300 2xl:left-4 2xl:right-4 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CONTACT */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="hidden items-center gap-2 2xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8b36a]" />
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#aaa09a]">
                Open Daily
              </span>
            </div>

            <a
              href="tel:+918007861113"
              aria-label="Call 11.11 Salon & Spa"
              className="hidden items-center gap-2 text-[#c8beb5] transition-colors hover:text-[#d8b36a] xl:flex"
            >
              <Phone size={13} className="text-[#d8b36a]" />
              <span className="text-[10px] tracking-wide">
                +91 8007861113
              </span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border border-[#d8b36a]/70 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#d8b36a] transition-all duration-300 hover:bg-[#d8b36a] hover:text-[#171313] 2xl:px-5"
            >
              <FaWhatsapp size={15} />
              <span>WhatsApp Us</span>
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center border border-[#d8b36a]/40 text-[#d8b36a] transition-colors hover:bg-[#d8b36a] hover:text-[#171313] xl:hidden"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-b border-[#d8b36a]/20 bg-[#0d0b0c] transition-all duration-300 xl:hidden ${
          isOpen
            ? "max-h-[650px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-5 pb-6 pt-3 sm:px-8">
          {/* MOBILE OFFER */}
          <div className="mb-4 border border-[#d8b36a]/25 bg-[#171313] p-4">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8b36a]">
              A little something for you
            </p>
            <p className="mt-2 font-serif text-xl text-[#f7efe7]">
              Enjoy 30% off your first visit.
            </p>
            <Link
              to="/contact"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#d8b36a]"
            >
              Claim your offer
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* MOBILE LINKS */}
          <div className="divide-y divide-white/10">
            {navItems.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-sm transition-colors ${
                    active
                      ? "text-[#d8b36a]"
                      : "text-[#d0c7bf] hover:text-[#d8b36a]"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[9px] tracking-wider text-[#d8b36a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>

                  <ArrowUpRight size={15} />
                </Link>
              );
            })}
          </div>

          {/* MOBILE ACTIONS */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-5 flex items-center justify-center gap-3 border border-[#d8b36a]/70 px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#d8b36a] transition-colors hover:bg-[#d8b36a] hover:text-[#171313]"
          >
            <FaWhatsapp size={17} />
            WhatsApp Us
            <ArrowUpRight size={15} />
          </a>

          <a
            href="tel:+918007861113"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-4 flex items-center justify-center gap-2 py-2 text-xs text-[#c8beb5] hover:text-[#d8b36a]"
          >
            <Phone size={13} className="text-[#d8b36a]" />
            +91 8007861113
          </a>

          <div className="mt-3 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[#938980]">
            <Clock3 size={13} className="text-[#d8b36a]" />
            Daily · 10:00 AM – 10:00 PM
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
