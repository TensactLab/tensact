"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { MEDIA_INTERVAL_MS, type MediaItem } from "./media-config";

export function MediaSequence({ items }: { items: MediaItem[] }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const videos = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (reduced || items.length < 2) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), MEDIA_INTERVAL_MS);
    return () => clearInterval(t);
  }, [reduced, items.length]);

  useEffect(() => {
    const el = videos.current[active];
    if (el && !reduced) {
      el.currentTime = 0;
      el.play().catch(() => setFailed((f) => new Set(f).add(items[active].id)));
    }
    const t = setTimeout(() => {
      videos.current.forEach((v, i) => {
        if (v && i !== active) v.pause();
      });
    }, 1300);
    return () => clearTimeout(t);
  }, [active, reduced, items]);

  return (
    <>
      {items.map((item, i) => (
        <div key={item.id} className="slide" data-active={i === active} aria-hidden={i !== active}>
          {item.src && !failed.has(item.id) ? (
            <video
              ref={(el) => {
                videos.current[i] = el;
              }}
              src={item.src}
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              onError={() => setFailed((f) => new Set(f).add(item.id))}
            />
          ) : (
            <div className={`fx fx-${i % 4}`} />
          )}
        </div>
      ))}
      <div className="orbit-meta">
        <span aria-live="polite">{items[active].label}</span>
        <div className="orbit-dots">
          {items.map((item, i) => (
            <button
              key={item.id}
              className="dot"
              type="button"
              aria-label={`Show ${item.label}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
