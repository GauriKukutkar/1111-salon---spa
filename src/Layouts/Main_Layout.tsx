
import type { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FestiveOfferPopup from "../Components/FestiveOfferPopup";

interface MainLayoutProps {
  children: ReactNode;
}

const Main_Layout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0c0b0b] text-[#f4eadb]">
      <Navbar />

      {/* Main Website Content */}
      <main className="pt-[122px]">
        {children}
      </main>

      <Footer />

      {/* Festive Offer Popup */}
      <FestiveOfferPopup />
    </div>
  );
};

export default Main_Layout;
