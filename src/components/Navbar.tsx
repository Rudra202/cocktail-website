import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 150;
      let current = navLinks[0]?.id || "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          current = navLinks[i].id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: { trigger: "nav", start: "bottom top" },
    });
    navTween.fromTo(
      "#navbar",
      { backgroundColor: "transparent" },
      { backgroundColor: "black", backgroundFilter: "blur(10px)", duration: 1, ease: "power1.inOut" }
    );
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="navbar">
      <div>
        <a href="#hero" className="flex items-center gap-2 logo-link" onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}>
          <img src="/images/logo.png" alt="Purple cocktail glass logo" />
          <p>Velvet Pour</p>
        </a>
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={`nav-link-${link.id}`}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.id}`}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className={activeSection === link.id ? "text-yellow" : ""}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
