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

export type TeamMember = {
  id: string;
  label: string;
  src?: string;
  name?: string;
  role?: string;
  bio?: string;
  x?: string;
  linkedin?: string;
};

/** Members with a `name` are clickable and show a profile. Others render as neutral placeholders. */
export const TEAM: ReadonlyArray<TeamMember> = [
  {
    id: "absalem-aroon",
    label: "Absalem Aroon",
    src: "/images/team/absalem-aroon.jpg",
    name: "Absalem Aroon",
    role: "CEO",
    bio: "Absalem Aroon is the founder and CEO of Tensact Labs, with a strong focus on distributed systems, blockchain technology, and cybersecurity research.",
    x: "https://x.com/absalemaroon",
    linkedin: "https://linkedin.com/in/absalemaroon",
  },
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `member-${i + 2}`,
    label: `Team member placeholder ${i + 2}`,
  })),
];
