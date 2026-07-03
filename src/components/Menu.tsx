"use client";

import { useRef, useState } from "react";

import gsap from "gsap";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";

const Menu = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const totalCocktails = sliderLists.length;

  useGSAP(() => {
    const xPercent = previousIndex < currentIndex ? -100 : 100;
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2, .details p",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  useGSAP(() => {
    const leftLeafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "40% 50%",
        end: "60% 60%",
        scrub: true,
      },
    });
    const rightLeafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "0% 50%",
        end: "20% 60%",
        scrub: true,
      },
    });
    leftLeafTimeline.from("#m-left-leaf", {
      x: -100,
      y: 100,
    });
    rightLeafTimeline.fromTo(
      "#m-right-leaf",
      {
        x: 40,
        y: -100,
        rotateZ: 30,
      },
      {
        x: 20,
        y: 20,
        rotateZ: 0,
      }
    );
  }, []);

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    const prevIndex =
      index === totalCocktails && newIndex === 0
        ? -1
        : index === -1 && newIndex === totalCocktails - 1
        ? totalCocktails
        : currentIndex;
    setPreviousIndex(prevIndex);
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                goToSlide(index);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex - 1);
            }}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/arrow-left.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-right"
            onClick={() => {
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/arrow-right.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
