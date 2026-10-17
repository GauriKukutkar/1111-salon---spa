
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gift,
  Heart,
  Sparkles,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918007861113";

const giftAmounts = [1000, 2500, 5000];

export default function GiftCards() {
  const [amount, setAmount] = useState(2500);
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState(
    "You deserve a little time for yourself."
  );

  const purchaseMessage = `Hi 11.11 Salon & Spa! I would like to enquire about purchasing a gift card.

Gift card value: ₹${amount.toLocaleString("en-IN")}
Recipient: ${recipient || "Not specified"}
From: ${sender || "Not specified"}
Message: ${message || "No personal message"}

Please share the payment and redemption details.`;

  return (
    <main className="overflow-hidden bg-[#f7efe7] text-[#211915]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0d0b0c] px-6 py-24 text-[#f7efe7] sm:py-32 md:px-12 lg:px-20">
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#d8af7a]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
              <span className="h-px w-9 bg-[#d8af7a]" />
              The Gift Of Self-Care
            </p>

            <h1 className="text-5xl font-light leading-[1.12] sm:text-6xl lg:text-7xl">
              Gift a little
              <br />
              <span className="font-serif italic text-[#d8af7a]">
                luxury.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
              Some gifts are more than things. Give someone special
              a moment to unwind, feel beautiful and enjoy a little
              time just for themselves.
            </p>

            <a
              href="#choose-gift"
              className="mt-9 inline-flex items-center gap-3 bg-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#171313] transition hover:bg-[#f0d4ad]"
            >
              Create Your Gift
              <ArrowRight size={16} />
            </a>

            <div className="mt-12 flex items-center gap-3 text-sm text-white/50">
              <Heart size={17} className="text-[#d8af7a]" />
              Give beauty. Give time. Give them 11.11.
            </div>
          </motion.div>

          {/* GIFT CARD VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-4 border border-[#d8af7a]/25" />

            <div className="relative aspect-[1.45/1] overflow-hidden border border-[#d8af7a]/60 bg-[#211915] p-6 sm:p-9">
              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#d8af7a]/20" />
              <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#d8af7a]/20" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-light tracking-[0.12em]">
                      11.11
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/50">
                      Salon & Spa
                    </p>
                  </div>
                  <Gift size={24} className="text-[#d8af7a]" strokeWidth={1.2} />
                </div>

                <div>
                  <p className="font-serif text-3xl italic text-[#d8af7a] sm:text-4xl">
                    Gift Voucher
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
                    More than a gift. It’s their time.
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/40">
                    A little luxury, just for you
                  </p>
                  <Sparkles size={20} className="text-[#d8af7a]" />
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-white/35">
              A thoughtful gift for every occasion
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 text-center md:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
          Thoughtfully Given
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
          Make their ordinary day
          <br />
          <span className="font-serif italic">feel extraordinary.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#79695e]">
          Birthdays, celebrations, thank-yous or just because.
          A beauty gift card is an invitation to pause, recharge
          and enjoy the 11.11 experience.
        </p>
      </section>

      {/* CUSTOMISE GIFT */}
      <section
        id="choose-gift"
        className="scroll-mt-16 bg-[#eae0d5] px-6 py-20 md:px-12 lg:px-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              Make It Personal
            </p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Create a thoughtful gift
            </h2>
            <p className="mt-4 text-sm text-[#79695e]">
              Choose a value and add a personal message.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            {/* FORM */}
            <div className="bg-[#f7efe7] p-6 sm:p-9">
              <h3 className="text-xl font-light">01. Choose your gift value</h3>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {giftAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value)}
                    aria-pressed={amount === value}
                    className={`border px-2 py-5 text-sm transition sm:px-4 sm:text-base ${
                      amount === value
                        ? "border-[#211915] bg-[#211915] text-[#f7efe7]"
                        : "border-[#d7c8b8] hover:border-[#a77d4b]"
                    }`}
                  >
                    ₹{value.toLocaleString("en-IN")}
                    {amount === value && (
                      <Check size={14} className="mx-auto mt-2 text-[#d8af7a]" />
                    )}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-xs leading-5 text-[#79695e]">
                Values shown are gift card design options. Confirm availability
                and terms with the salon before purchasing.
              </p>

              <div className="mt-9 space-y-5">
                <h3 className="text-xl font-light">02. Make it personal</h3>

                <div>
                  <label className="mb-2 block text-xs tracking-wide text-[#6d5d52]">
                    Recipient's name
                  </label>
                  <input
                    value={recipient}
                    onChange={(event) => setRecipient(event.target.value)}
                    placeholder="Who is this gift for?"
                    className="w-full border border-[#d7c8b8] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#a77d4b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide text-[#6d5d52]">
                    Your name
                  </label>
                  <input
                    value={sender}
                    onChange={(event) => setSender(event.target.value)}
                    placeholder="Your name"
                    className="w-full border border-[#d7c8b8] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#a77d4b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide text-[#6d5d52]">
                    Personal message
                  </label>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={3}
                    maxLength={180}
                    placeholder="Write something thoughtful..."
                    className="w-full resize-y border border-[#d7c8b8] bg-transparent px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#a77d4b]"
                  />
                </div>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(purchaseMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-between gap-4 bg-[#211915] px-5 py-4 text-xs uppercase tracking-[0.15em] text-[#f7efe7] transition hover:bg-[#382b23]"
              >
                Enquire About This Gift
                <ArrowUpRight size={17} className="shrink-0 text-[#d8af7a]" />
              </a>

              <p className="mt-4 text-xs leading-5 text-[#79695e]">
                Your enquiry opens WhatsApp. Payment and voucher issuance
                will need to be confirmed by the salon.
              </p>
            </div>

            {/* LIVE PREVIEW */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#a77d4b]">
                Your Gift Preview
              </p>

              <motion.div
                key={amount}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex aspect-[1.15/1] min-h-[280px] flex-col justify-between overflow-hidden border border-[#d8af7a]/60 bg-[#171313] p-6 text-[#f7efe7] sm:aspect-[1.4/1] sm:p-9"
              >
                <div className="absolute -right-14 -top-14 h-64 w-64 rounded-full border border-[#d8af7a]/20" />
                <div className="absolute -right-2 -top-2 h-44 w-44 rounded-full border border-[#d8af7a]/20" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-xl tracking-[0.12em]">11.11</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/45">
                      Salon & Spa
                    </p>
                  </div>
                  <Gift size={24} className="text-[#d8af7a]" />
                </div>

                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                    A gift of beauty
                  </p>
                  <p className="mt-2 font-serif text-4xl italic text-[#d8af7a] sm:text-5xl">
                    ₹{amount.toLocaleString("en-IN")}
                  </p>
                  <p className="mt-4 text-sm text-white/80">
                    For {recipient.trim() || "Someone Special"}
                  </p>
                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/50">
                    {message || "A little luxury, just for you."}
                  </p>
                </div>

                <div className="relative flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Give beauty. Give time.
                  </p>
                  <p className="text-xs text-[#d8af7a]">
                    From {sender.trim() || "Someone Who Cares"}
                  </p>
                </div>
              </motion.div>

              <div className="mt-6 flex gap-3 text-sm leading-6 text-[#79695e]">
                <Sparkles
                  size={18}
                  className="mt-1 shrink-0 text-[#a77d4b]"
                />
                <p>
                  This is a visual preview only, not a redeemable voucher.
                  The salon must confirm payment and issue the actual gift card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#a77d4b]">
              Every Occasion
            </p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              A beautiful way to say it
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7c8b8] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "01", title: "Birthdays", text: "Celebrate their special day." },
              { number: "02", title: "Anniversaries", text: "Give a moment to share." },
              { number: "03", title: "Thank You", text: "Show someone you appreciate them." },
              { number: "04", title: "Just Because", text: "Make an ordinary day special." },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#f7efe7] px-6 py-8 sm:px-7 sm:py-10"
              >
                <p className="font-serif text-lg italic text-[#a77d4b]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-xl font-light">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#79695e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#211915] px-6 py-20 text-center text-[#f7efe7] md:py-24">
        <Gift size={30} className="mx-auto text-[#d8af7a]" strokeWidth={1.2} />
        <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#d8af7a]">
          Make Someone Smile
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-light leading-tight sm:text-5xl">
          More than a gift.
          <br />
          <span className="font-serif italic">It’s their time.</span>
        </h2>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 border border-[#d8af7a] px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-[#d8af7a] hover:text-[#171313]"
        >
          Talk to Our Team
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
