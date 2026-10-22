
import { SiGoogleplay, SiApple } from "react-icons/si";
import {
  ArrowUpRight,
  Search,
  UserRound,
  CalendarClock,
  CheckCircle2,
  ScanLine,
} from "lucide-react";
import appDownloadQR from "../assets/Relax_Mode_QR.jpg";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=in.relaxmode";

const APP_STORE_URL =
  "https://apps.apple.com/in/app/relax-mode-customer/id6755065630";

const bookingSteps = [
  {
    number: "01",
    icon: Search,
    title: "Find Our Salon",
    description:
      "Search for 11.11 Salon & Spa on Relax Mode and explore our available services.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "Choose Your Stylist",
    description:
      "Select your preferred stylist and the service you want, all in one place.",
  },
  {
    number: "03",
    icon: CalendarClock,
    title: "Pick Your Time",
    description:
      "Check available time slots and choose the one that fits your schedule.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Book With Confidence",
    description:
      "Confirm your appointment with the details clear before you book.",
  },
];

export default function AppDownloadSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0b0a] px-5 py-20 text-[#f4eadb] sm:px-8 lg:py-28">
      {/* Subtle gold background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#c9a15c]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#c9a15c]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d6b16e]">
            11.11 Salon & Spa × Relax Mode
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your salon visit,
            <span className="block italic text-[#d6b16e]">
              perfectly planned.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            No unnecessary calls. No confusion about timings.
            Find 11.11 Salon & Spa on Relax Mode, choose your
            preferred service and stylist, pick an available time
            slot, and book your appointment with ease.
          </p>
        </div>

        {/* Booking steps */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-[#c9a15c]/50 hover:bg-white/[0.045] sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#d6b16e]/50">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-[#c9a15c]/30 text-[#d6b16e] transition group-hover:bg-[#c9a15c] group-hover:text-[#0c0b0a]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[#f4eadb]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {step.description}
                </p>

                <div className="mt-6 h-px w-10 bg-[#c9a15c]/60 transition-all group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Download and QR panel */}
        <div className="grid overflow-hidden border border-[#c9a15c]/30 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Download content */}
          <div className="flex flex-col justify-center bg-[#151310] p-7 sm:p-10 lg:p-14">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6b16e]">
              Your next appointment starts here
            </p>

            <h3 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              A better way to book
              <span className="block italic text-[#d6b16e]">
                your beauty time.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Get the Relax Mode app to discover 11.11 Salon & Spa,
              explore services, find your preferred stylist, and
              choose a convenient available slot — all in one
              simple booking journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Relax Mode on Google Play"
                className="group flex items-center gap-3 border border-white/20 px-4 py-3 transition hover:border-[#d6b16e] hover:bg-white/5 sm:px-5"
              >
                <SiGoogleplay className="text-2xl text-[#d6b16e]" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">
                    Get it on
                  </span>
                  <span className="text-sm font-medium">
                    Google Play
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-1 text-white/50 transition group-hover:text-[#d6b16e]"
                />
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Relax Mode from the App Store"
                className="group flex items-center gap-3 border border-white/20 px-4 py-3 transition hover:border-[#d6b16e] hover:bg-white/5 sm:px-5"
              >
                <SiApple className="text-2xl text-[#d6b16e]" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">
                    Download on the
                  </span>
                  <span className="text-sm font-medium">
                    App Store
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-1 text-white/50 transition group-hover:text-[#d6b16e]"
                />
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/40">
              Find your salon. Choose your stylist. Book your time.
            </p>
          </div>

          {/* QR code panel */}
          <div className="flex items-center justify-center bg-[#eee4d3] p-7 text-[#211a13] sm:p-10 lg:p-12">
            <div className="w-full max-w-sm text-center">
              <div className="mb-5 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6a38]">
                <ScanLine size={17} />
                Scan to get started
              </div>

              <div className="mx-auto w-fit border border-[#d0bd9d] bg-white p-3 shadow-xl sm:p-4">
                <img
                  src={appDownloadQR}
                  alt="QR code for Relax Mode app download"
                  className="h-48 w-48 object-contain sm:h-56 sm:w-56"
                  loading="lazy"
                />
              </div>

              <h4 className="mt-6 font-serif text-2xl sm:text-3xl">
                Scan. Choose. Relax.
              </h4>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#625648]">
                Scan the QR code with your phone to get the app
                and start planning your next visit to 11.11 Salon & Spa.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c9a15c]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8a6a38]">
                  11.11 Salon & Spa
                </span>
                <span className="h-px w-8 bg-[#c9a15c]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}