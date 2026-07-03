import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {

  const setTextAnimations = () => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100, duration: 1.8, ease: "expo.out", stagger: 0.05,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0, yPercent: 100, duration: 1.8, ease: "expo.out", stagger: 0.05, delay: 1,
    });
  };

  const setLeafAnimations = () => {
    gsap.timeline({
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    }).to(".right-leaf", { y: 200 }, 0).to(".left-leaf", { y: -200 }, 0);
  };

  useGSAP(() => {
    setTextAnimations();
    setLeafAnimations();
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">VELVET POUR</h1>
        <img src="/images/hero-left-leaf.png" alt="" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />
        <div className="body">
          <div className="content">
            <div className="hidden md:block space-y-5">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">Sip the Spirit <br /> of Summer</p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to ignite your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center">
        <img src="/images/cup-2.png" alt="Cocktail glass" className="h-[60vh] md:h-[80vh] w-auto object-contain" />
      </div>
    </>
  );
};

export default Hero;
