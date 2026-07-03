import { useState, useEffect, useRef } from "react";
import { faqItems } from "../constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="faq-item"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.5s ease ${i * 0.08}s`,
            }}
          >
            <button
              className={`faq-question ${openIndex === i ? "open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <span>+</span>
            </button>
            {openIndex === i && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
