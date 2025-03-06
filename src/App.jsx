import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WorkFlow from "./components/Work-flow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
