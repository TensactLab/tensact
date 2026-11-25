"use client";

import { Box } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";
import { TEAM } from "@/lib/constants";

export function WhoWeAre() {
  return (
    <Box as="section" id="about" className="s-who" aria-labelledby="who-title">
      <SectionTitle id="who-title">Who we are</SectionTitle>
      <div className="team">
        {TEAM.map((m) => (
          <div
            key={m.id}
            className="member"
            role="img"
            aria-label={m.label}
            style={m.src ? { backgroundImage: `url(${m.src})` } : undefined}
          />
        ))}
      </div>
    </Box>
  );
}
