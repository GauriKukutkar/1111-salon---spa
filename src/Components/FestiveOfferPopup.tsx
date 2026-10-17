import { useEffect, useRef, useState } from "react";
import { Sparkles, Gift } from "lucide-react";

const FestiveOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  const reopenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // First popup after 5 seconds
    const firstPopup = setTimeout(() => {
      setIsOpen(true);
      setPopupCount(1);
    }, 5000);

    return () => {
      clearTimeout(firstPopup);

      if (reopenTimerRef.current) {
        clearTimeout(reopenTimerRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    // Show again after 30 seconds
    // Maximum 3 times
    if (popupCount < 3) {
      reopenTimerRef.current = setTimeout(() => {
        setIsOpen(true);
        setPopupCount((prev) => prev + 1);
      }, 30000);
    }
  };

  const handleBookNow = () => {
    setIsOpen(false);

    document
      .getElementById("book")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.68)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* POPUP */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px",
          borderRadius: "20px",
          backgroundColor: "#f5eee6",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45)",
        }}
      >
        {/* =========================
            SMALL CLOSE BUTTON
        ========================= */}

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: 100000,

            width: "58px",
            height: "26px",

            border: "1px solid #d8af7a",
            borderRadius: "6px",

            backgroundColor: "#f5eee6",
            color: "#171313",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: 0,
            margin: 0,

            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",

            cursor: "pointer",

            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",

            appearance: "none",
            WebkitAppearance: "none",
          }}
        >
          CLOSE
        </button>

        {/* =========================
            TOP SECTION
        ========================= */}

        <div
          style={{
            backgroundColor: "#171313",
            color: "#f5eee6",
            padding: "36px 32px 34px",
            textAlign: "center",
            borderRadius: "20px 20px 0 0",
          }}
        >
          {/* Sparkles */}
          <div
            style={{
              width: "58px",
              height: "58px",
              margin: "0 auto 18px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "50%",
              border: "1px solid rgba(216, 175, 122, 0.55)",
            }}
          >
            <Sparkles
              size={25}
              color="#d8af7a"
              strokeWidth={1.7}
            />
          </div>

          <p
            style={{
              margin: "0 0 10px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#d8af7a",
            }}
          >
            Festive Season
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.2,
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#f5eee6",
            }}
          >
            It's Glow Time.
          </h2>

          <p
            style={{
              maxWidth: "360px",
              margin: "14px auto 0",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#d8cec1",
            }}
          >
            Celebrate the festive season with a little extra
            self-care and beauty.
          </p>
        </div>

        {/* =========================
            OFFER SECTION
        ========================= */}

        <div
          style={{
            padding: "30px 32px 28px",
            textAlign: "center",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <Gift
            size={29}
            color="#d8af7a"
            strokeWidth={1.7}
            style={{
              display: "block",
              margin: "0 auto 12px",
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#77706a",
            }}
          >
            Special Festive Offer
          </p>

          <h3
            style={{
              margin: "8px 0 0",
              fontSize: "44px",
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#171313",
            }}
          >
            30% OFF
          </h3>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "14px",
              color: "#77706a",
            }}
          >
            On selected salon services
          </p>

          {/* BOOK BUTTON */}
          <button
            type="button"
            onClick={handleBookNow}
            style={{
              width: "100%",
              marginTop: "24px",
              padding: "15px 24px",

              border: "none",
              borderRadius: "999px",

              backgroundColor: "#171313",
              color: "#f5eee6",

              fontSize: "14px",
              fontWeight: 600,

              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d8af7a";
              e.currentTarget.style.color = "#171313";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#171313";
              e.currentTarget.style.color = "#f5eee6";
            }}
          >
            Book Your Festive Look
          </button>

          <p
            style={{
              margin: "15px 0 0",
              fontSize: "11px",
              color: "#918980",
            }}
          >
            Limited festive offer • Terms may apply
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestiveOfferPopup;