import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrolled = (windowScroll / height) * 100;
    setScrollPos(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPos };
};

export default useScroll;
