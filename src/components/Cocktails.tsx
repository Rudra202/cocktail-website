import { cocktailLists, mockTailLists } from "../constants";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";

const Cocktails = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [ran, setRan] = useState(false);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: { trigger: "#cocktails", start: "top 30%", end: "bottom 80%", scrub: true },
    }).from("#c-left-leaf", { x: -100, y: 100 }).from("#c-right-leaf", { x: 100, y: 100 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran) {
          setRan(true);
          gsap.fromTo(
            "#cocktails .list li",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
          );
        }
      },
      { threshold: 0.15 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, [ran]);

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />
      <div className="list" ref={listRef}>
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28 flex-1 min-w-0">
                  <h3 className="truncate">{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28 flex-1 min-w-0">
                  <h3 className="truncate">{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-center pb-12 md:pb-16 px-4">
        <MagneticButton as="a" href="#menu" className="bg-yellow text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-yellow/90 transition-colors text-sm md:text-base">
          Full Menu →
        </MagneticButton>
      </div>
    </section>
  );
};

export default Cocktails;
