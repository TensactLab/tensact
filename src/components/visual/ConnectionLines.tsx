"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* Coordinates are in units of 1% of the orbit's width. The orbit occupies x 10–110, y 0–56.25. */
const PATHS = ["M0 2 L10 10", "M0 45 L10 38", "M120 2 L110 10"];
const DOTS = [[10, 10], [10, 38], [110, 10]];

export function ConnectionLines() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from("path", { strokeDashoffset: 1, duration: 1.2, stagger: 0.15, delay: 0.4, ease: "power2.out" });
      gsap.from("circle", { opacity: 0, duration: 0.4, stagger: 0.15, delay: 1.3 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} className="lines" viewBox="0 0 120 56.25" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      {PATHS.map((d) => (
        <path key={d} d={d} pathLength={1} />
      ))}
      {DOTS.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.9} />
      ))}
    </svg>
  );
}
