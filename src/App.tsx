import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_Layout from "./Layouts/Main_Layout";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/services";
import Gallery from "./Pages/gallery";
import Contact from "./Pages/contact";
import Testimonials from "./Pages/testimonials";
import OurWork from "./Pages/Ourwork";
import Memberships from "./Pages/Memberships";
import GiftCards from "./Pages/GiftCards";
import PriceGuide from "./Pages/priceguide";
import TermsAndConditions from "./Pages/terms";
import PrivacyPolicy from "./Pages/privacypolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Main_Layout>
              <Home />
            </Main_Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Main_Layout>
              <About />
            </Main_Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Main_Layout>
              <Services />
            </Main_Layout>
          }
        />

        <Route
          path="/gallery"
          element={
            <Main_Layout>
              <Gallery />
            </Main_Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Main_Layout>
              <Contact />
            </Main_Layout>
          }
        />

        <Route
          path="/testimonials"
          element={
            <Main_Layout>
              <Testimonials />
            </Main_Layout>
          }
        />

        <Route
          path="/OurWork"
          element={
            <Main_Layout>
              <OurWork />
            </Main_Layout>
          }
        />

        <Route
          path="/Memberships"
          element={
            <Main_Layout>
              <Memberships />
            </Main_Layout>
          }
        />

        <Route
          path="/GiftCards"
          element={
            <Main_Layout>
              <GiftCards />
            </Main_Layout>
          }
        />

        <Route
          path="/priceguide"
          element={
            <Main_Layout>
              <PriceGuide />
            </Main_Layout>
          }
        />

        <Route
          path="/privacypolicy"
          element={
            <Main_Layout>
              <PrivacyPolicy />
            </Main_Layout>
          }
        />

        <Route
          path="/terms"
          element={
            <Main_Layout>
              <TermsAndConditions />
            </Main_Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;