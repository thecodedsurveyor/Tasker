import { usePageTitle } from "../hooks/usePageTitle";
import Clients from "../components/sections/Clients";
import Faqs from "../components/sections/Faqs";
import Features from "../components/sections/Features";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Newsletter from "../components/sections/Newsletter";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  usePageTitle("Home");
  
  return (
    <>
      <div className="my-2">
        <Hero />
      </div>
      <div className="my-2">
        <Clients />
      </div>
      <div className="my-2">
        <Features />
      </div>
      <div className="my-2">
        <Testimonial />
      </div>
      <div className="my-2">
        <Faqs />
      </div>
      <div className="my-2">
        <Newsletter />
      </div>
      <div className="my-2">
        <Footer />
      </div>
    </>
  );
};

export default Home;
