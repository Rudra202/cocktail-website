import { useEffect, useRef, useState } from "react";
import { galleryImages } from "../constants";

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef}>
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.8)",
              transition: `all 0.5s ease ${i * 0.05}s`,
            }}
            onClick={() => setLightbox(img.src)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
