import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={ref} className={`blur-load ${loaded ? "loaded" : ""} ${className}`}>
      {loaded && <img src={src} alt={alt} className="w-full h-full object-cover" />}
    </div>
  );
};

export default LazyImage;
