"use client";

import { Heading } from "@chakra-ui/react";

export function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Heading
      as="h2"
      id={id}
      display="flex"
      alignItems="center"
      gap="12px"
      fontSize="15px"
      fontWeight={600}
      letterSpacing="0.01em"
      lineHeight="22px"
      sx={{ "&::after": { content: '""', flex: 1, height: "1px", background: "var(--lime)", opacity: 0.7 } }}
    >
      {children}
    </Heading>
  );
}
