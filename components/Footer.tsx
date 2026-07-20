import Image from "next/image";

export default function Footer() {
  return (
    <footer id="location" className="site-footer">
      <div className="site-footer__left">
        <Image src="/logo-cropped.png" alt="Marcus Rios Athlete Academy logo" width={130} height={40} loading="lazy" />
        <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          Sacramento, CA
        </div>
        <a
          href="https://www.instagram.com/marcusriostraining/"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer__link"
          style={{ color: "var(--neon-1)", borderLeft: "1px solid var(--border-default)", paddingLeft: 14 }}
        >
          Academy Instagram
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 14, borderLeft: "1px solid var(--border-default)", paddingLeft: 14, flexWrap: "wrap" }}>
          <span className="site-footer__label">Coach Marcus:</span>
          <a href="https://www.instagram.com/marcusriosofficial/" target="_blank" rel="noopener noreferrer" className="site-footer__link" style={{ color: "var(--accent-blue)" }}>
            Instagram
          </a>
          <a href="https://www.tiktok.com/@marcusriosofficial" target="_blank" rel="noopener noreferrer" className="site-footer__link" style={{ color: "var(--accent-blue)" }}>
            TikTok
          </a>
          <a href="https://www.youtube.com/@marcusriosofficial" target="_blank" rel="noopener noreferrer" className="site-footer__link" style={{ color: "var(--accent-blue)" }}>
            YouTube
          </a>
        </div>
      </div>
      <div style={{ font: "var(--text-caption)", color: "var(--text-muted)", textAlign: "right" }}>
        © 2026 Marcus Rios Athlete Academy.
      </div>
    </footer>
  );
}
