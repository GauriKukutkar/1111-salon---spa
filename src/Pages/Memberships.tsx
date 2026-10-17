
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Crown,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918007861113";

const memberships = [
  {
    name: "Essential",
    subtitle: "Your everyday beauty ritual",
    description:
      "For those who love making a little time for themselves.",
    icon: Sparkles,
    benefits: [
      "Personalised beauty consultation",
      "Member-only offers",
      "Priority appointment assistance",
      "Updates on seasonal promotions",
    ],
  },
  {
    name: "Signature",
    subtitle: "A little more, just for you",
    description:
      "For those who make self-care a regular part of life.",
    icon: Crown,
    featured: true,
    benefits: [
      "Everything in Essential",
      "Access to exclusive member offers",
      "Personalised service recommendations",
      "Priority booking assistance",
    ],
  },
  {
    name: "Luxe",
    subtitle: "Your elevated beauty experience",
    description:
      "For those who appreciate a more personalised salon experience.",
    icon: Star,
    benefits: [
      "Everything in Signature",
      "Personalised beauty planning",
      "Special occasion consultation",
      "Dedicated membership assistance",
    ],
  },
];

const faqs = [
  {
    question: "How do I become a member?",
    answer:
      "Contact our team on WhatsApp to learn about available membership plans and enrolment details.",
  },
  {
    question: "What are the membership prices?",
    answer:
      "Membership pricing and benefits can be confirmed directly with our team before you enrol.",
  },
  {
    question: "Can I ask about membership benefits before joining?",
    answer:
      "Absolutely. Contact us to understand the available plans, included benefits, validity and applicable terms.",
  },
  {
    question: "How do I book an appointment as a member?",
    answer:
      "Get in touch with our team to arrange your appointment and confirm any applicable membership benefits.",
  },
];

export default function Memberships() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#f7efe7] text-[#211915]">
      {/* HERO */}
      <section className="relative bg-[#0d0b0c] px-6 py-24 text-[#f7efe7] sm:py-32 md:px-12 lg:px-20">
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d8af7a]"
          >
            <span className="h-px w-8 bg-[#d8af7a]" />
            The 11.11 Membership Club
            <span className="h-px w-8 bg-[#d8af7a]" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-5xl font-light leading-[1.12] sm:text-6xl lg:text-7xl"
          >
            Beauty is a ritual.
            <br />
            <span className="font-serif italic text-[#d8af7a]">
              Make it yours.
            </span>
          </motion.h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Discover a more personal way to experience beauty and
            self-care with 11.11 Salon & Spa memberships.
          </p>

          <a
            href="#membership-plans"
            className="mt-9 inline-flex items-center gap-3 bg-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#171313] transition hover:bg-[#f0d4ad]"
          >
            Explore Memberships
            <ArrowRight size={16} />
          </a>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-7 text-xs tracking-wide text-white/50">
            <span className="flex items-center gap-2">
              <Heart size={15} className="text-[#d8af7a]" />
              Personalised Care
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={15} className="text-[#d8af7a]" />
              Beauty & Self-Care
            </span>
            <span className="flex items-center gap-2">
              <Star size={15} className="text-[#d8af7a]" />
              Member Privileges
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              More Than A Membership
            </p>
            <h2 className="max-w-xl text-4xl font-light leading-tight sm:text-5xl">
              Your time.
              <br />
              <span className="font-serif italic">
                Your beauty. Your way.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-[#6d5d52] md:justify-self-end">
            Your beauty routine should feel like something to look
            forward to. Explore our membership options and speak with
            our team to find the experience that suits you best.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP CARDS */}
      <section
        id="membership-plans"
        className="scroll-mt-20 px-6 pb-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              Find Your Membership
            </p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Choose your experience
            </h2>
            <p className="mt-4 text-sm text-[#79695e]">
              Explore the options and enquire about the details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {memberships.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`relative flex flex-col border p-7 sm:p-9 ${
                    plan.featured
                      ? "border-[#b68a54] bg-[#211915] text-[#f7efe7] md:-translate-y-3"
                      : "border-[#dfd1c2] bg-[#fbf7f2]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 bg-[#d8af7a] px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#171313]">
                      Featured
                    </span>
                  )}

                  <div
                    className={`mb-7 flex h-12 w-12 items-center justify-center border ${
                      plan.featured
                        ? "border-[#d8af7a]/50 text-[#d8af7a]"
                        : "border-[#d8af7a] text-[#a77d4b]"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.3} />
                  </div>

                  <p
                    className={`text-xs uppercase tracking-[0.22em] ${
                      plan.featured ? "text-[#d8af7a]" : "text-[#a77d4b]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-light">{plan.name}</h3>

                  <p
                    className={`mt-4 min-h-14 text-sm leading-6 ${
                      plan.featured ? "text-white/60" : "text-[#79695e]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`my-7 h-px ${
                      plan.featured ? "bg-white/15" : "bg-[#dfd1c2]"
                    }`}
                  />

                  <p className="mb-5 text-xs uppercase tracking-[0.18em]">
                    Membership highlights
                  </p>

                  <ul className="flex-1 space-y-4">
                    {plan.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm leading-6"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[#b68a54]"
                        />
                        <span
                          className={
                            plan.featured ? "text-white/75" : "text-[#65564c]"
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                      `Hi, I would like to know more about the ${plan.name} membership at 11.11 Salon & Spa. Please share the pricing, benefits and terms.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-9 flex items-center justify-between border px-5 py-4 text-xs uppercase tracking-[0.15em] transition ${
                      plan.featured
                        ? "border-[#d8af7a] bg-[#d8af7a] text-[#171313] hover:bg-[#f0d4ad]"
                        : "border-[#c8b49f] hover:border-[#211915] hover:bg-[#211915] hover:text-[#f7efe7]"
                    }`}
                  >
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-[#79695e]">
            Membership pricing, validity, inclusions and terms are subject
            to confirmation by the salon.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#eae0d5] px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
                The 11.11 Difference
              </p>
              <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
                Self-care should
                <span className="font-serif italic"> feel special.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-[#6d5d52]">
                Membership is about making room for yourself. From
                personalised guidance to discovering your next favourite
                service, our team is here to help you enjoy your salon
                experience.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#a77d4b] pb-2 text-sm"
              >
                Talk to our team
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "A more personal experience",
                  text: "Discuss your beauty preferences and service needs with our team.",
                },
                {
                  number: "02",
                  title: "Discover your routine",
                  text: "Explore services that fit your personal beauty and self-care goals.",
                },
                {
                  number: "03",
                  title: "Know your benefits",
                  text: "Get clarity on pricing, inclusions and membership terms before joining.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 border-b border-[#cfc0b0] py-6 first:border-t"
                >
                  <span className="font-serif text-xl italic text-[#a77d4b]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#79695e]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              Good To Know
            </p>
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">
              Membership
              <br />
              <span className="font-serif italic">FAQs.</span>
            </h2>
          </div>

          <div className="border-t border-[#dfd1c2]">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-[#dfd1c2]">
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#a77d4b] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#79695e]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#171313] px-6 py-20 text-center text-[#f7efe7] md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
          Your Beauty Journey
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
          Make time for
          <span className="font-serif italic text-[#d8af7a]">
            {" "}yourself.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55">
          Connect with 11.11 Salon & Spa to explore membership options
          and find the right fit for you.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#171313] transition hover:bg-[#f0d4ad]"
        >
          Enquire on WhatsApp
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
