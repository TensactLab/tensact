import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  colors: {
    brand: {
      charcoal: "#101110",
      white: "#F4F3EE",
      lime: "#C6F36B",
      graphite: "#242624",
      grey: "#92958F",
    },
  },
  fonts: { heading: "var(--font-sans), sans-serif", body: "var(--font-sans), sans-serif", mono: "var(--font-mono), monospace" },
  styles: { global: { body: { bg: "brand.charcoal", color: "brand.white" } } },
});
