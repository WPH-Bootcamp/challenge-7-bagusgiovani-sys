import { useEffect } from "react";
import Header from "./components/Header/Navbar";
import Hero from "./components/container/HeroSection";
import TrustedLogo from "./components/container/TrustedLogo/Index";
import EndSection from "./components/container/EndtoEnd/EndtoEndCard";
import ProcessSection from "./components/container/Process/OurProcess";
import Solutions from "./components/container/ITSolution/ITSolution";
import IndustrySection from "./components/container/Industry/IndustrySection";
import PortoSection from "./components/container/Portofolio/Portofolio";
import TestimonialSection from "./components/container/Testimonial";
import FAQList from "./components/container/FAQSection/FAQList";
import ContactUsSection from "./components/container/ContactUs/Contact";
import Footer from "./components/container/Footer/Footer";

function App() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, []);

  return (
    <div className="dark:bg-black dark:text-white bg-white">
      <>
        <Header />
        <Hero />
        <TrustedLogo />
        <EndSection />
        <ProcessSection />
        <Solutions />
        <IndustrySection />
        <PortoSection />
        <TestimonialSection />
        <FAQList />
        <ContactUsSection />
        <Footer />
      </>
    </div>
  );
}

export default App;
