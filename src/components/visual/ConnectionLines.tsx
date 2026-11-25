"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* Desktop: coordinates are in units of 1% of the orbit's width. The orbit occupies x 10–110, y 0–56.25. */
const PATHS = ["M0 2 L10 10", "M0 45 L10 38", "M120 2 L110 10"];
const DOTS = [[10, 10], [10, 38], [110, 10]];

type Geo = { w: number; h: number; paths: string[]; dots: number[][] };

const MOBILE = "(max-width: 899px)";
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ConnectionLines() {
  const desktop = useRef<SVGSVGElement>(null);
  const mobile = useRef<SVGSVGElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  // Desktop draw-in
  useEffect(() => {
    if (reduce() || !desktop.current) return;
    const ctx = gsap.context(() => {
      gsap.from("path", { strokeDashoffset: 1, duration: 1.2, stagger: 0.15, delay: 0.4, ease: "power2.out" });
      gsap.from("circle", { opacity: 0, duration: 0.4, stagger: 0.15, delay: 1.3 });
    }, desktop);
    return () => ctx.revert();
  }, []);

  // Mobile: measure the real elements so lines always meet the titles and the orbit
  useEffect(() => {
    const stage = mobile.current?.closest(".stage") as HTMLElement | null;
    if (!stage) return;
    const compute = () => {
      if (!window.matchMedia(MOBILE).matches) return setGeo(null);
      const s = stage.getBoundingClientRect();
      const rect = (id: string) => document.getElementById(id)?.getBoundingClientRect();
      const what = rect("what-title"), who = rect("who-title"), work = rect("work-title"), o = rect("orbit");
      if (!what || !who || !work || !o) return;
      const x = (v: number) => Math.round((v - s.left) * 10) / 10;
      const y = (v: number) => Math.round((v - s.top) * 10) / 10;
      // What we do: rule runs right, then drops to the orbit's top edge
      const d1 = [x(what.right), y(what.top + what.height / 2)];
      const e1 = [x(o.left + o.width * 0.3), y(o.top)];
      // Who we are: short rise from the title, then straight across to the orbit's left edge
      const sx = x(who.left + 64), sy = y(who.top);
      const e2 = [x(o.left), sy - 44];
      // Work with us: rule runs right, then rises to the orbit's lower-left edge
      const d3 = [x(work.right), y(work.top + work.height / 2)];
      const e3 = [x(o.left), y(o.bottom - 28)];
      setGeo({
        w: s.width,
        h: s.height,
        paths: [
          `M${d1[0]} ${d1[1]} L${e1[0]} ${e1[1]}`,
          `M${sx} ${sy} L${sx + 34} ${e2[1]} H${e2[0]}`,
          `M${d3[0]} ${d3[1]} L${e3[0]} ${e3[1]}`,
        ],
        dots: [e1, e2, e3],
      });
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(stage);
    window.addEventListener("resize", compute);
    document.fonts?.ready.then(compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const ready = geo !== null;
  useEffect(() => {
    if (!ready || reduce() || !mobile.current) return;
    const ctx = gsap.context(() => {
      gsap.from("path", { strokeDashoffset: 1, duration: 1.1, stagger: 0.15, delay: 0.3, ease: "power2.out" });
      gsap.from("circle", { opacity: 0, duration: 0.4, stagger: 0.15, delay: 1.2 });
    }, mobile);
    return () => ctx.revert();
  }, [ready]);

  return (
    <>
      <svg ref={desktop} className="lines" viewBox="0 0 120 56.25" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
        {PATHS.map((d) => (
          <path key={d} d={d} pathLength={1} />
        ))}
        {DOTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.9} />
        ))}
      </svg>
      <svg ref={mobile} className="lines-m" viewBox={geo ? `0 0 ${geo.w} ${geo.h}` : "0 0 1 1"} aria-hidden="true" focusable="false">
        {geo?.paths.map((d) => (
          <path key={d} d={d} pathLength={1} />
        ))}
        {geo?.dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3.5} />
        ))}
      </svg>
    </>
  );
}
