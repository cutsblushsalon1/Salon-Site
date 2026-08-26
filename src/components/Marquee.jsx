import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORDS = [
  "Haircuts",
  "Hydrafacial",
  "Bridal",
  "Grooming",
  "Nails",
  "Keratin",
  "Beard Sculpt",
];

const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  const loopWords = [...WORDS, ...WORDS];

  return (
    <div className="relative overflow-hidden text-cream bg-ink p-5">
      <div
        ref={trackRef}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {loopWords.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 font-display text-2xl font-medium text-ivory-dim sm:text-3xl"
          >
            {word}
            <span className="text-brass" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
