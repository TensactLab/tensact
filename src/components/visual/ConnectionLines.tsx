"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* Coordinates are in units of 1% of the orbit's width. The orbit occupies x 10–110, y 0–100. */
const PATHS = ["M0 2 L10 16", "M0 80 L10 68", "M120 2 L110 16"];
const DOTS = [[10, 16], [10, 68], [110, 16]];

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
    <svg ref={ref} className="lines" viewBox="0 0 120 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      {PATHS.map((d) => (
        <path key={d} d={d} pathLength={1} />
      ))}
      {DOTS.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.9} />
      ))}
    </svg>
  );
}
