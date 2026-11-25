export const SITE = {
  name: "Tensact Labs",
  title: "Tensact Labs — Research and Technology",
  description:
    "Tensact Labs explores and develops technologies across software, distributed systems, cryptography, and emerging computational systems.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#orbit" },
  { label: "About", href: "#about" },
] as const;

export const WORK_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#orbit" },
  { label: "Careers", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOCUS_AREAS = [
  "Distributed systems",
  "Cryptography",
  "Infrastructure",
  "Software",
] as const;

/** Replace `src` with a path such as "/images/team/member-01.jpg" to use a real portrait. */
export const TEAM: ReadonlyArray<{ id: string; label: string; src?: string }> =
  Array.from({ length: 14 }, (_, i) => ({
    id: `member-${i + 1}`,
    label: `Team member placeholder ${i + 1}`,
  }));
