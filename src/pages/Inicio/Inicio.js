import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import AboutBanner from "./AboutBanner/AboutBanner";
import TestimonialContainer from "./Testimonials/TestimonialContainer";
import ShopsContainer from "./Shops/ShopsContainer";
import Contact from "./Contact/Contact";
import Footer from "../../components/Footer/Footer"

function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <AboutBanner />
      <TestimonialContainer />
      <ShopsContainer />
      <Contact />
      <Footer />

    </>
  );
}

export default Inicio;
