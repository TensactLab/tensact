export type MediaItem = {
  id: string;
  label: string;
  /** Local video path. Leave undefined to show the built-in fallback visual. */
  src?: string;
};

export const MEDIA_INTERVAL_MS = 7000;

/** Clips are 16:9 — the orbit uses the same ratio, so nothing is cropped. */
export const MEDIA_ITEMS: MediaItem[] = [
  { id: "research", label: "Research", src: "/videos/orbit/research.mp4" },
  { id: "experiments", label: "Experiments", src: "/videos/orbit/experiments.mp4" },
];
