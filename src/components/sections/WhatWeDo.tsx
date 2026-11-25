"use client";

import { Box, Text } from "@chakra-ui/react";
import { SectionTitle } from "./SectionTitle";

export function WhatWeDo() {
  return (
    <Box as="section" id="research" className="s-what" aria-labelledby="what-title">
      <SectionTitle id="what-title">What we do</SectionTitle>
      <Text mt={5} fontSize={{ base: "17px", lg: "18px" }} lineHeight="1.55" maxW="36ch">
        Tensact Labs is an independent technology and research organization exploring the foundations of intelligent, secure, and distributed systems.
      </Text>
    </Box>
  );
}
