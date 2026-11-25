"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MediaSequence } from "./MediaSequence";
import { MEDIA_ITEMS } from "./media-config";

export function MediaOrbit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1.1, ease: "power1.out" });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div id="orbit" ref={ref} className="orbit" role="region" aria-label="Tensact Media Orbit">
      <MediaSequence items={MEDIA_ITEMS} />
    </div>
  );
}
