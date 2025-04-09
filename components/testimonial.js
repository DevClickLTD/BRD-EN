"use client";
import { useEffect, useRef } from "react";

export default function Testimonial() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const el = parallaxRef.current;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elRect = el.getBoundingClientRect();
      const elTop = elRect.top + scrollPosition;
      const elHeight = elRect.height;

      // Изчисляване на позицията на скролиране спрямо елемента
      const scrollPercent =
        (scrollPosition - (elTop - windowHeight)) / (elHeight + windowHeight);

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        // Започваме от позиция 0 (най-горе) и се движим надолу при скролиране
        const translateY = Math.min(200, Math.max(0, scrollPercent * 200));
        el.style.transform = `translateY(-${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Извикване веднъж при монтиране за инициализация
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute w-full h-[600px] bg-cover bg-top bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/brd-team.jpg')",
          transform: "translateY(0)",
          willChange: "transform",
          top: 0,
        }}
      />
    </section>
  );
}
