import { useEffect, useRef, useState } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
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
    <section id="testimonials" ref={sectionRef}>
      <h2>What Our Guests Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="testimonial-card"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}
          >
            <div className="stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
            <p className="quote">"{t.quote}"</p>
            <div className="author">
              <img src={t.img} alt={t.name} />
              <div className="min-w-0">
                <div className="name truncate">{t.name}</div>
                <div className="role truncate">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
