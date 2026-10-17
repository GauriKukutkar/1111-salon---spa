import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Sevices";
import Gallery from "../Components/Gallery";
import Contact from "../Components/ContactUs";
import Book from "../Components/Book";
import OurWork from "../Components/OurWork";
import Testimonials from "../Components/Testimonials";
import Social from "../Components/Social";
import GiftVouchers from "../Components/GiftVouchers";
import FestiveOfferPopup from "../Components/FestiveOfferPopup";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Gallery />
      <Testimonials />
      <Book />
      <GiftVouchers />
      <Social />
      <Contact />


      <FestiveOfferPopup />
    </>
  );
};

export default Home;