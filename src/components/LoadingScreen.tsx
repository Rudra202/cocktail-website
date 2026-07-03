import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      id="loading-screen"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s" }}
    >
      <div className="loader" />
      <p>Velvet Pour</p>
    </div>
  );
};

export default LoadingScreen;
