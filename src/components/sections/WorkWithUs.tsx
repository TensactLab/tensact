"use client";

import { Box, Link, Text } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";
import { WORK_LINKS } from "@/lib/constants";

export function WorkWithUs() {
  return (
    <Box as="section" id="work" className="s-work" aria-labelledby="work-title">
      <SectionTitle id="work-title">Work with us</SectionTitle>
      <Text mt={4} color="brand.grey" fontSize="15px">Explore</Text>
      <div className="work-links">
        {WORK_LINKS.map((l) => (
          <Link key={l.label} href={l.href} _hover={{ textDecoration: "none" }}>
            {l.label}
          </Link>
        ))}
      </div>
    </Box>
  );
}
