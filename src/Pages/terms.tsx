
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing our website, contacting us, or booking a service with 11.11 Salon & Spa, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.",
    },
    {
      title: "2. Appointments & Bookings",
      content:
        "Appointments are subject to availability. Please provide accurate contact details when making a booking. We recommend arriving on time to ensure you receive your complete service.",
    },
    {
      title: "3. Cancellations & Rescheduling",
      content:
        "If you need to cancel or reschedule an appointment, please contact us as early as possible. Any applicable cancellation charges or restrictions will be communicated to you before booking.",
    },
    {
      title: "4. Services & Pricing",
      content:
        "Service descriptions and prices are provided for general guidance and may vary depending on hair length, product selection, service complexity, or individual requirements. Any additional charges will be discussed before proceeding.",
    },
    {
      title: "5. Offers & Discounts",
      content:
        "Promotional offers, discounts, memberships, and gift cards are subject to their respective terms, validity periods, and eligibility requirements. Offers cannot be combined unless explicitly stated.",
    },
    {
      title: "6. Payments",
      content:
        "Payment is due upon completion of the service unless otherwise agreed. The available payment methods and any applicable charges will be communicated at the salon.",
    },
    {
      title: "7. Health & Safety",
      content:
        "Please inform our team about relevant allergies, sensitivities, skin conditions, or other concerns before your service. We may recommend an alternative treatment or decline a service when necessary for safety.",
    },
    {
      title: "8. Customer Conduct",
      content:
        "We expect all guests to treat our staff and other customers respectfully. We reserve the right to discontinue a service in cases of abusive, threatening, or inappropriate behaviour.",
    },
    {
      title: "9. Personal Belongings",
      content:
        "Customers are responsible for their personal belongings while visiting the salon. Please take care of valuables and notify our team if you misplace an item.",
    },
    {
      title: "10. Website Content",
      content:
        "Website content, photographs, service descriptions, and prices are provided for informational purposes. We make reasonable efforts to keep information accurate but cannot guarantee that every detail is always current.",
    },
    {
      title: "11. Limitation of Liability",
      content:
        "To the extent permitted by applicable law, 11.11 Salon & Spa is not responsible for losses arising from circumstances beyond our reasonable control. Nothing in these terms excludes liability that cannot legally be excluded.",
    },
    {
      title: "12. Changes to These Terms",
      content:
        "We may update these Terms and Conditions when necessary. The latest version will be published on this page, with the revised effective date where applicable.",
    },
    {
      title: "13. Contact Us",
      content:
        "For questions about these terms, bookings, or salon services, please contact our team using the contact details below.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0b0b] text-[#f4eadb]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d8af7a]/15 px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#d8af7a]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-xs tracking-wide text-white/50 transition hover:text-[#d8af7a]"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#d8af7a]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#d8af7a]">
              The Fine Print
            </span>
          </div>

          <div className="flex items-start gap-5">
            <div className="hidden rounded-2xl border border-[#d8af7a]/20 bg-[#d8af7a]/[0.06] p-4 sm:block">
              <FileText size={28} strokeWidth={1.2} className="text-[#d8af7a]" />
            </div>

            <div>
              <h1 className="font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-7xl">
                Terms & <span className="italic text-[#d8af7a]">Conditions</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                A clear understanding makes every experience better. Please
                read the terms that apply when using our website and salon
                services.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
            11.11 Salon & Spa
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-28">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#d8af7a]">
              On This Page
            </p>
            <nav className="space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-${index + 1}`}
                  className="block text-xs leading-5 text-white/40 transition hover:text-[#d8af7a]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="mb-10 border-b border-white/10 pb-8">
              <p className="text-sm leading-7 text-white/60">
                These terms explain the general conditions for using our
                website, booking appointments, and receiving services from
                11.11 Salon & Spa. Please contact us if you need clarification
                before making a booking.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <article
                  id={`terms-${index + 1}`}
                  key={section.title}
                  className="scroll-mt-32 border-b border-white/[0.08] pb-9 last:border-0"
                >
                  <h2 className="font-serif text-xl font-normal text-[#f4eadb] md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-white/50">
                    {section.content}
                  </p>

                  {index === sections.length - 1 && (
                    <div className="mt-5 space-y-3 text-sm text-white/55">
                      <p>11.11 Salon & Spa</p>
                      <p>
                        Vinayak Apartment, 41, Jaitala Rd, Parsodi,
                        Subhash Nagar, Nagpur, Maharashtra 440022
                      </p>
                      <a
                        href="tel:+918007861113"
                        className="block w-fit transition hover:text-[#d8af7a]"
                      >
                        +91 80078 61113
                      </a>
                      <a
                        href="https://wa.me/918007861113"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#d8af7a] transition hover:text-[#f4eadb]"
                      >
                        Contact us on WhatsApp
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-[#d8af7a]/15 bg-[#d8af7a]/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div>
                <h3 className="font-serif text-xl">Need clarification?</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  Our team is happy to help with your questions.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#d8af7a] px-5 py-3 text-xs font-medium text-[#171313] transition hover:bg-[#e5c494]"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/40">
              <Link to="/privacypolicy" className="transition hover:text-[#d8af7a]">
                Privacy Policy
              </Link>
              <Link to="/" className="transition hover:text-[#d8af7a]">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
