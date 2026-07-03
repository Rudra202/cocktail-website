import { useEffect, useRef, useState } from "react";
import { teamMembers } from "../constants";

const Team = () => {
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
    <section id="team" ref={sectionRef}>
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <div
            key={member.name}
            className="team-card"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}
          >
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} loading="lazy" />
            </div>
            <div className="info">
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
