import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" style={{ borderTop: "1px solid rgba(244,243,238,.14)" }}>
      <div className="shell" style={{ padding: "28px var(--pad)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: "var(--muted)", fontSize: 14 }}>
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>Contact details to be announced.</span>
      </div>
    </footer>
  );
}
