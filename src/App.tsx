import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <main style={{ display: loading ? "none" : "block" }}>
        <CursorGlow />
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Testimonials />
        <Events />
        <Team />
        <FAQ />
        <Gallery />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
};

export default App;
