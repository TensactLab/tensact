import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <header>
      <nav className="nav" aria-label="Primary">
        <a href="#home" className="wordmark" aria-label="Tensact Labs, home">
          Tensact<span>.</span> Labs
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        {/* Mobile: boxed segmented control, as in the reference */}
        <div className="nav-box">
          <div className="inner">
            <a href="#home">Home</a>
            <details>
              <summary>Menu</summary>
              <ul className="nav-menu">
                {NAV_LINKS.slice(1).map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
}
