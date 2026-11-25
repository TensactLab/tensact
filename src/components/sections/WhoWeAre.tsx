"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";
import { TEAM } from "@/lib/constants";

export function WhoWeAre() {
  const [selectedId, setSelectedId] = useState(TEAM[0].id);
  const selected = TEAM.find((m) => m.id === selectedId);

  return (
    <Box as="section" id="about" className="s-who" aria-labelledby="who-title">
      <SectionTitle id="who-title">Who we are</SectionTitle>
      <div className="team">
        {TEAM.map((m) => {
          const style = m.src ? { backgroundImage: `url(${m.src})` } : undefined;
          return m.name ? (
            <button
              key={m.id}
              type="button"
              className="member"
              style={style}
              aria-label={`${m.name}, ${m.role}`}
              aria-pressed={m.id === selectedId}
              onClick={() => setSelectedId(m.id)}
            />
          ) : (
            <div key={m.id} className="member" role="img" aria-label={m.label} style={style} />
          );
        })}
      </div>
      {selected?.name && (
        <div className="profile" aria-live="polite">
          <h3>{selected.name}</h3>
          <p className="role">{selected.role}</p>
          <p className="bio">{selected.bio}</p>
          <div className="social">
            {selected.x && (
              <a href={selected.x} target="_blank" rel="noopener noreferrer" aria-label={`${selected.name} on X`}>X</a>
            )}
            {selected.linkedin && (
              <a href={selected.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${selected.name} on LinkedIn`}>LinkedIn</a>
            )}
          </div>
        </div>
      )}
    </Box>
  );
}
