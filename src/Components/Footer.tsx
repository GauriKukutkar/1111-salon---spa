
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  MessageCircle,
  // ExternalLink,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Salon & Spa Logo.png";

const phoneNumbers = [
  { display: "+91 80078 61113", dial: "+918007861113" },
  // { display: "+91 80078 61119", dial: "+918007861119" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/11.11salonandspa.official/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594740257824",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCYfFAN-ff1j-dP8pfYS5bSQ",
    icon: FaYoutube,
  },
  {
    name: "X",
    href: "https://x.com/the1111studio",
    icon: FaXTwitter,
  },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Our Work", href: "/OurWork" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Gift Cards", href: "/GiftCards" },
  { label: "Memberships", href: "/Memberships" },
  { label: "Price Guide", href: "/priceguide" },
];

const serviceLinks = [
  "Hair & Styling",
  "Hair Colour",
  "Hair Spa",
  "Facial & Skin",
  "Nails",
  "Bridal Beauty",
  "Men's Grooming",
];

const supportLinks = [
  { label: "Book Appointment", href: "/contact" },
  { label: "Share Your Memory", href: "/contact" },
  { label: "General Inquiry", href: "/contact" },
  { label: "Suggestions", href: "/contact" },
  { label: "Complaints", href: "/contact" },
];

const Footer = () => {
  const whatsappLink =
    "https://wa.me/918007861113?text=" +
    encodeURIComponent("Hi 11.11 Salon & Spa, I have an enquiry.");

  return (
    <footer className="bg-[#0a0909] text-[#f5eee6]">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.7fr_0.9fr_0.9fr]">
          {/* BRAND & CONTACT */}
          <div>
            <a href="/" className="inline-block" aria-label="11.11 Salon home">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl tracking-[0.12em] text-[#d8af7a]">
<img
      src={logo}
      alt="11.11 Salon & Spa"
      className="h-14 w-auto object-contain"
    />                </span>
                <span className="h-8 w-px bg-[#d8af7a]/40" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Salon & Spa
                </span>
              </div>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/45">
              A modern unisex salon created around personal style,
              thoughtful beauty and an experience that feels completely yours.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#d8af7a] hover:text-[#d8af7a]"
                >
                  <Icon size={16} />
                </a>
              ))}

              <a
                href="https://share.google/TGr7tjMKgVOltxaad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                title="Google Business Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#d8af7a] hover:text-[#d8af7a]"
              >
                <MapPin size={17} />
              </a>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-5 space-y-4">
              <div className="flex gap-3 text-sm leading-6 text-white/55">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d8af7a]"
                  strokeWidth={1.4}
                />
                <span>
  11.11 Salon & Spa,
  <br />
  Vinayak Apartment, 41, Jaitala Rd,
  <br />
  Parsodi, Subhash Nagar, Nagpur,
  <br />
  Maharashtra 440022
</span>
              </div>

              {phoneNumbers.map((phone) => (
                <a
                  key={phone.dial}
                  href={`tel:${phone.dial}`}
                  className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#d8af7a]"
                >
                  <Phone
                    size={17}
                    className="shrink-0 text-[#d8af7a]"
                    strokeWidth={1.4}
                  />
                  {phone.display}
                </a>
              ))}

              <a
                href="mailto:hello@1111salon.com"
                className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#d8af7a]"
              >
                <Mail
                  size={17}
                  className="shrink-0 text-[#d8af7a]"
                  strokeWidth={1.4}
                />
                      11.11salonandspa.official@gmail.com               </a>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <Clock3
                  size={17}
                  className="shrink-0 text-[#d8af7a]"
                  strokeWidth={1.4}
                />
                Open Daily · 10 AM — 9 PM
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d8af7a] px-5 py-3 text-xs font-medium text-[#171313] transition hover:bg-[#e5c494]"
            >
              <MessageCircle size={16} />
              Chat With Us
            </a>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="mb-7 text-[11px] uppercase tracking-[0.3em] text-[#d8af7a]">
              Explore
            </p>

            <div className="space-y-4">
              {exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="mb-7 text-[11px] uppercase tracking-[0.3em] text-[#d8af7a]">
              Services
            </p>

            <div className="space-y-4">
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="/services"
                  className="footer-link"
                >
                  {service}
                </a>
              ))}

              <a
                href="/services"
                className="inline-flex items-center gap-2 pt-1 text-xs text-[#d8af7a] transition hover:text-[#f0d4ad]"
              >
                View All Services
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <p className="mb-7 text-[11px] uppercase tracking-[0.3em] text-[#d8af7a]">
              Need Help?
            </p>

            <div className="space-y-4">
              {supportLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs leading-5 text-white/35">
                Have something in mind?
              </p>

              <a
                href="/contact"
                className="group mt-3 inline-flex items-center gap-2 text-sm text-[#d8af7a]"
              >
                Start your appointment
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10" />

        <div className="flex flex-col justify-between gap-5 pt-7 text-[11px] text-white/30 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} 11.11 Salon & Spa. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="/privacypolicy"
              className="transition hover:text-[#d8af7a]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition hover:text-[#d8af7a]"
            >
              Terms & Conditions
            </a>
          </div>

          <p>Beauty, your way.</p>
        </div>
      </div>

      {/* FLOATING BOOK BUTTON */}
      <a
        href="/contact"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#d8af7a] px-5 py-3.5 text-xs font-medium text-[#171313] shadow-xl transition hover:bg-[#e5c494]"
      >
        Book Appointment
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition group-hover:rotate-45">
          <ArrowUpRight size={15} />
        </span>
      </a>

      <style>{`
        .footer-link {
          display: block;
          width: fit-content;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: rgba(255,255,255,0.5);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-link:hover {
          color: #d8af7a;
          transform: translateX(3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
