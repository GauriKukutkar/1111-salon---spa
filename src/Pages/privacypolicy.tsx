
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "11.11 Salon & Spa respects your privacy and is committed to handling your personal information responsibly. This Privacy Policy explains what information may be collected when you visit our website, contact us, or book our services, and how that information may be used.",
    },
    {
      title: "2. Information We Collect",
      content:
        "Depending on how you interact with us, we may collect your name, phone number, email address, appointment details, service preferences, and information you voluntarily provide through our contact forms or communications.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We may use your information to manage appointments, respond to enquiries, provide requested salon services, communicate booking updates, address feedback, improve our customer experience, and meet applicable legal obligations.",
    },
    {
      title: "4. Appointment & Communication Data",
      content:
        "If you contact us by phone, WhatsApp, email, or through our website, we may use the information you provide to respond to your request and coordinate your appointment. Please avoid sharing unnecessary sensitive personal information through these channels.",
    },
    {
      title: "5. Cookies & Website Technologies",
      content:
        "Our website may use cookies or similar technologies to support website functionality and understand how visitors use the site. You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
    },
    {
      title: "6. Sharing of Information",
      content:
        "We do not sell your personal information. We may share relevant information with service providers who help us operate our website or communicate with customers, or when disclosure is necessary to comply with applicable law, protect rights, or address security concerns.",
    },
    {
      title: "7. Data Security",
      content:
        "We take reasonable measures designed to protect personal information against unauthorised access, loss, misuse, or disclosure. However, no method of online transmission or electronic storage can be guaranteed to be completely secure.",
    },
    {
      title: "8. Data Retention",
      content:
        "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including appointment management, customer support, recordkeeping, and applicable legal requirements.",
    },
    {
      title: "9. Your Privacy Rights",
      content:
        "Subject to applicable law, you may request access to, correction of, or deletion of your personal information, or raise a concern about how it is handled. We may need to verify your identity before responding and may retain certain records where legally required.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "Our website may link to third-party services, including social media platforms and WhatsApp. These services operate under their own privacy policies and practices. We encourage you to review their policies before sharing information with them.",
    },
    {
      title: "11. Children's Privacy",
      content:
        "Our website is not intended to collect personal information from children without appropriate authorisation. Where a service involves a minor, a parent or legal guardian should contact us regarding applicable consent and service requirements.",
    },
    {
      title: "12. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any revised policy will be published on this page.",
    },
    {
      title: "13. Contact Us",
      content:
        "If you have questions, requests, or concerns regarding this Privacy Policy or the handling of your personal information, please contact 11.11 Salon & Spa using the details below.",
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
              Your Privacy Matters
            </span>
          </div>

          <div className="flex items-start gap-5">
            <div className="hidden rounded-2xl border border-[#d8af7a]/20 bg-[#d8af7a]/[0.06] p-4 sm:block">
              <ShieldCheck
                size={28}
                strokeWidth={1.2}
                className="text-[#d8af7a]"
              />
            </div>

            <div>
              <h1 className="font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-7xl">
                Privacy <span className="italic text-[#d8af7a]">Policy</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                Your trust matters to us. Learn how 11.11 Salon & Spa may
                collect, use, and protect your personal information when you
                interact with us.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
            11.11 Salon & Spa
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
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
                  href={`#privacy-${index + 1}`}
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
                This policy applies to information collected through our
                website and through your direct interactions with 11.11 Salon
                & Spa. The information we collect depends on the services you
                request and how you choose to contact us.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <article
                  id={`privacy-${index + 1}`}
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
                <h3 className="font-serif text-xl">Have a privacy question?</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  Contact our team about your personal information.
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
              <Link
                to="/terms"
                className="transition hover:text-[#d8af7a]"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/"
                className="transition hover:text-[#d8af7a]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
