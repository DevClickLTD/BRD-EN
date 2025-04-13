"use client";
import { useEffect, useRef } from "react";

export default function Testimonial() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      // Проверка за мобилни устройства, не прилагаме parallax ефект под 768px
      if (window.innerWidth < 768) {
        parallaxRef.current.style.transform = "translateY(0)";
        return;
      }

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

    // Добавяме resize listener, за да реагираме на промяна в размера на екрана
    window.addEventListener("resize", handleScroll);
    // Извикване веднъж при монтиране за инициализация
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute w-full h-[300px] sm:h-[600px] bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out md:bg-top"
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
