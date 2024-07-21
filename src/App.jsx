import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/Home/HeroSection";
import LogoSection from "./components/Home/LogoSection";
import FeatureSection from "./components/Home/FeatureSection";
import BlogSection from "./components/Home/BlogSection";
import AboutMain from "./components/About/AboutMain";
import Team from "./components/About/Team";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <LogoSection />
                <FeatureSection />
                <BlogSection />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutMain />
                <Team />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
