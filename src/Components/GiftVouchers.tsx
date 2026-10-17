import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

const voucherAmounts = ["₹1,000", "₹2,500", "₹5,000"];

const GiftVouchers = () => {
  const [selectedAmount, setSelectedAmount] = useState("₹2,500");

  return (
    <section
      id="gift-vouchers"
      className="relative overflow-hidden bg-[#f5eee6] px-6 py-24 text-[#171313] md:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d8af7a]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b7044]">
            Gift A Little Luxury
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
            Give them something
            <br />
            they'll actually
            <span className="font-serif italic text-[#9b7044]">
              {" "}love.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#171313]/55 md:text-base">
            Give your loved ones the gift of time, beauty and a little
            self-care. Choose a voucher and let them pick their perfect
            11.11 experience.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid overflow-hidden rounded-[2rem] bg-[#171313] lg:grid-cols-[1fr_1fr]">

          {/* LEFT — MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-between p-8 text-[#f5eee6] md:p-12 lg:p-14"
          >
            {/* Decorative 11 */}
            <div className="pointer-events-none absolute -bottom-20 -left-10 select-none font-serif text-[280px] leading-none text-[#d8af7a]/[0.06]">
              11
            </div>

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8af7a]/30 text-[#d8af7a]">
                <Gift size={24} strokeWidth={1.3} />
              </div>

              <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#d8af7a]">
                For Someone Special
              </p>

              <h3 className="mt-4 max-w-lg text-3xl font-light leading-tight md:text-5xl">
                More than a gift.
                <br />
                <span className="font-serif italic text-[#d8af7a]">
                  It's their time.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Birthday, anniversary, wedding, promotion — or simply
                because you care. Give them a reason to slow down,
                relax and feel their best.
              </p>

            </div>

            {/* Benefits */}
            <div className="relative mt-12 space-y-4">

              <div className="flex items-center gap-3 text-sm text-white/65">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d8af7a]/15 text-[#d8af7a]">
                  <Check size={14} />
                </span>
                Personalised for your loved one
              </div>

              <div className="flex items-center gap-3 text-sm text-white/65">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d8af7a]/15 text-[#d8af7a]">
                  <Check size={14} />
                </span>
                Perfect for every occasion
              </div>

              <div className="flex items-center gap-3 text-sm text-white/65">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d8af7a]/15 text-[#d8af7a]">
                  <Check size={14} />
                </span>
                Let them choose their experience
              </div>

            </div>
          </motion.div>

          {/* RIGHT — VOUCHER */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#e7d4b8] p-7 md:p-10 lg:p-12"
          >

            {/* Voucher Card */}
            <div className="relative overflow-hidden rounded-2xl bg-[#f8f2e9] p-7 shadow-2xl md:p-9">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#9b7044]/15" />
              <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full border border-[#9b7044]/10" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#9b7044]">
                      11.11 Salon
                    </p>

                    <h4 className="mt-3 font-serif text-3xl italic">
                      Gift Voucher
                    </h4>
                  </div>

                  <Heart
                    size={23}
                    strokeWidth={1.3}
                    className="text-[#9b7044]"
                  />
                </div>

                <div className="my-8 h-px bg-[#171313]/10" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#171313]/40">
                  Voucher Value
                </p>

                <p className="mt-2 text-5xl font-light text-[#9b7044]">
                  {selectedAmount}
                </p>

                <p className="mt-3 max-w-xs text-xs leading-5 text-[#171313]/45">
                  A little self-care, beautifully wrapped and ready
                  to give.
                </p>

                <div className="mt-7 flex items-center gap-2 text-xs text-[#171313]/50">
                  <Sparkles size={14} className="text-[#9b7044]" />
                  Redeemable on salon services
                </div>

              </div>
            </div>

            {/* Amount */}
            <div className="mt-8">

              <p className="text-xs uppercase tracking-[0.2em] text-[#171313]/50">
                Choose a gift amount
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {voucherAmounts.map((amount) => {
                  const active = selectedAmount === amount;

                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-xl border px-3 py-3 text-sm transition ${
                        active
                          ? "border-[#171313] bg-[#171313] text-[#f5eee6]"
                          : "border-[#171313]/15 bg-transparent text-[#171313]/65 hover:border-[#9b7044]"
                      }`}
                    >
                      {amount}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Recipient */}
            <div className="mt-7 grid gap-4 md:grid-cols-2">

              <input
                type="text"
                placeholder="Recipient's name"
                className="rounded-xl border border-[#171313]/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#171313]/35 focus:border-[#9b7044]"
              />

              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-[#171313]/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#171313]/35 focus:border-[#9b7044]"
              />

            </div>

            <textarea
              rows={3}
              placeholder="Add a personal message..."
              className="mt-4 w-full resize-none rounded-xl border border-[#171313]/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#171313]/35 focus:border-[#9b7044]"
            />

            {/* CTA */}
            <button
              type="button"
              className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#171313] px-6 py-4 text-sm text-[#f5eee6] transition hover:bg-[#9b7044]"
            >
              Buy Gift Voucher

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d8af7a] text-[#171313] transition group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </button>

            <p className="mt-4 text-center text-[10px] text-[#171313]/35">
              Gift voucher details and redemption terms will be shared
              after purchase.
            </p>

          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-between gap-3 text-xs text-[#171313]/35 md:flex-row"
        >
          <span>
            Give beauty. Give time. Give them 11.11.
          </span>

          <span>
            A thoughtful gift for every occasion.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default GiftVouchers;