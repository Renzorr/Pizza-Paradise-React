import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import AboutBanner from "./AboutBanner/AboutBanner";
import MenuSection from "./MenuSection/MenuSection"
import TestimonialContainer from "./Testimonials/TestimonialContainer";
import ShopsContainer from "./Shops/ShopsContainer";
import Contact from "./Contact/Contact";

function Inicio() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutBanner />
      <MenuSection />
      <TestimonialContainer />
      <ShopsContainer />
      <Contact />
    </>
  );
}

export default Inicio;
