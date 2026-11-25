import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header>
      <nav className="nav" aria-label="Primary">
        <a href="#home" className="wordmark">
          Tensact<span>.</span> Labs
          <span style={{ position: "absolute", left: -9999 }}>{SITE.name}</span>
        </a>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
