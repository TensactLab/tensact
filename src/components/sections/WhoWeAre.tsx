"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";
import { TEAM, type TeamMember } from "@/lib/constants";

function Tile({ m, selected, onSelect }: { m: TeamMember; selected?: boolean; onSelect: (id: string) => void }) {
  const style = m.src ? { backgroundImage: `url(${m.src})` } : undefined;
  if (!m.name) return <div className="member" role="img" aria-label={m.label} style={style} />;
  return (
    <button
      type="button"
      className="member"
      style={style}
      aria-label={`${m.name}, ${m.role}`}
      aria-pressed={selected}
      onClick={() => onSelect(m.id)}
    />
  );
}

export function WhoWeAre() {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const selected = TEAM.find((m) => m.id === openId);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <Box as="section" id="about" className="s-who" aria-labelledby="who-title">
      <SectionTitle id="who-title">Who we are</SectionTitle>
      <div className="team">
        {TEAM.map((m) => (
          <Tile key={m.id} m={m} onSelect={setOpenId} />
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setOpenId(null)}>
          <button ref={closeRef} type="button" className="modal-close" aria-label="Close profile" onClick={() => setOpenId(null)}>
            ×
          </button>
          <div className="modal-body" role="dialog" aria-modal="true" aria-label={selected.name} onClick={(e) => e.stopPropagation()}>
            <div className="modal-card">
              <div className="modal-photo" style={{ backgroundImage: `url(${selected.src})` }} role="img" aria-label={selected.name} />
              <div className="modal-head">
                <h3>{selected.name}</h3>
                <div className="modal-social">
                  {selected.x && (
                    <a href={selected.x} target="_blank" rel="noopener noreferrer" aria-label={`${selected.name} on X`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {selected.linkedin && (
                    <a href={selected.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${selected.name} on LinkedIn`}>
                      in
                    </a>
                  )}
                </div>
              </div>
              <p className="modal-role">{selected.role}</p>
              <p className="modal-bio">{selected.bio}</p>
            </div>
            <div className="modal-team">
              {TEAM.map((m) => (
                <Tile key={m.id} m={m} selected={m.id === openId} onSelect={setOpenId} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
