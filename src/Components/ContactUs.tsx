import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Lightbulb,
  AlertCircle,
} from "lucide-react";

type ContactType = "Complaint" | "Suggestion" | "Inquiry";

const contactOptions = [
  {
    type: "Complaint" as ContactType,
    icon: AlertCircle,
    description: "Something didn't go as expected?",
  },
  {
    type: "Suggestion" as ContactType,
    icon: Lightbulb,
    description: "Have an idea for us?",
  },
  {
    type: "Inquiry" as ContactType,
    icon: MessageSquare,
    description: "Need some information?",
  },
];

const ContactUs = () => {
  const [type, setType] = useState<ContactType>("Inquiry");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0c0b0b] px-6 py-24 text-[#f5eee6] md:px-10 lg:px-16"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8af7a]">
            Contact Us
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            We're here to
            <br />
            <span className="font-serif italic text-[#d8af7a]">
              listen.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            Have a question, suggestion or something you'd like
            us to know? Send us a message and our team will get
            back to you.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between rounded-3xl bg-[#d8af7a] p-8 text-[#171313] md:p-10"
          >
            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                How can we help?
              </p>

              <div className="mt-8 space-y-3">

                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  const active = type === option.type;

                  return (
                    <button
                      key={option.type}
                      type="button"
                      onClick={() => setType(option.type)}
                      className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                        active
                          ? "bg-[#171313] text-[#f5eee6]"
                          : "bg-black/[0.06] hover:bg-black/[0.1]"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                          active
                            ? "bg-[#d8af7a] text-[#171313]"
                            : "bg-black/10"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          {option.type}
                        </p>

                        <p
                          className={`mt-1 text-xs ${
                            active
                              ? "text-white/50"
                              : "text-black/45"
                          }`}
                        >
                          {option.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto opacity-40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </button>
                  );
                })}

              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-12 border-t border-black/15 pt-7">

              <div className="space-y-5">

                <div className="flex gap-3">
                  <MapPin size={18} strokeWidth={1.4} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                      Visit
                    </p>

                    <p className="mt-1 text-sm">
  11.11 Salon,
  Vinayak Apartment, 41, Jaitala Rd, Subhash Nagar, Nagpur, Maharashtra 440022
</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} strokeWidth={1.4} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                      Call
                    </p>

                    <p className="mt-1 text-sm">
                      +91 8007861113 , +91 8007861119
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} strokeWidth={1.4} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                      Email
                    </p>

                    <p className="mt-1 text-sm">
                      11.11salonandspa.official@gmail.com 
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-[#171313] p-8 md:p-10 lg:p-14"
          >

            {submitted ? (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d8af7a]/40 text-[#d8af7a]">
                  <CheckCircle2 size={28} />
                </div>

                <h3 className="mt-6 text-3xl font-light">
                  Thank you.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/45">
                  Your {type.toLowerCase()} has been received.
                  Our team will review your message and get back
                  to you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.15em] transition hover:border-[#d8af7a] hover:text-[#d8af7a]"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <>
                <div className="mb-10 flex items-start justify-between gap-6">

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                      {type}
                    </p>

                    <h3 className="mt-3 text-2xl font-light md:text-3xl">
                      {type === "Complaint" &&
                        "Tell us what went wrong."}

                      {type === "Suggestion" &&
                        "Help us make 11.11 better."}

                      {type === "Inquiry" &&
                        "What would you like to know?"}
                    </h3>
                  </div>

                  <span className="hidden text-5xl font-serif text-[#d8af7a]/20 md:block">
                    11
                  </span>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  {/* Name + Phone */}
                  <div className="grid gap-6 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                        Name
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                        Phone
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                      />
                    </div>

                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="11.11salonandspa.official@gmail.com"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                    />
                  </div>

                  {/* Booking reference for complaints */}
                  {type === "Complaint" && (
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                        Appointment Reference
                      </label>

                      <input
                        type="text"
                        placeholder="Optional"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                      />
                    </div>
                  )}

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                      Subject
                    </label>

                    <input
                      required
                      type="text"
                      placeholder={
                        type === "Complaint"
                          ? "What happened?"
                          : type === "Suggestion"
                          ? "Your idea..."
                          : "What can we help with?"
                      }
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/35">
                      Message
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm outline-none placeholder:text-white/20 transition focus:border-[#d8af7a]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#d8af7a] px-6 py-4 text-sm font-medium text-[#171313] transition hover:bg-[#e5c494]"
                  >
                    Send {type}

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>

                  <p className="text-center text-[11px] leading-5 text-white/25">
                    We respect your privacy and will only use your
                    information to respond to your message.
                  </p>

                </form>
              </>
            )}

          </motion.div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/25 md:flex-row">
          <span>
            11.11 Salon — We're listening.
          </span>

          <span>
            Response time may vary during busy hours.
          </span>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;