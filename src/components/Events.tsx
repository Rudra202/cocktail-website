import { useEffect, useRef, useState } from "react";
import { events } from "../constants";

const Events = () => {
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
    <section id="events" ref={sectionRef}>
      <h2>Events & Experiences</h2>
      <div className="events-grid">
        {events.map((ev, i) => (
          <div
            key={ev.title}
            className="event-card"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}
          >
            <h3>{ev.title}</h3>
            <div className="meta">
              <span>{ev.date}</span>
              <span>{ev.time}</span>
            </div>
            <p>{ev.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
