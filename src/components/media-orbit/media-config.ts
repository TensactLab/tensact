export type MediaItem = {
  id: string;
  label: string;
  /** Local video path, e.g. "/videos/orbit/distributed-systems.mp4". Leave undefined to show the built-in fallback visual. */
  src?: string;
};

export const MEDIA_INTERVAL_MS = 7000;

export const MEDIA_ITEMS: MediaItem[] = [
  { id: "distributed-systems", label: "Distributed systems" },
  { id: "cryptography", label: "Cryptography" },
  { id: "research", label: "Research" },
  { id: "software", label: "Software" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "experiments", label: "Computational experiments" },
];
