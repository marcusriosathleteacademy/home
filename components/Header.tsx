"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="header-sticky">
      <header className="site-header">
        <a href="#top" className="site-header__logo">
          <Image src="/logo-cropped.png" alt="Marcus Rios Athlete Academy" width={144} height={44} priority />
        </a>

        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="site-header__hamburger"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="site-header__nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="site-header__nav-link">
              {l.label}
            </a>
          ))}
          <a href="#apply" className="site-header__cta">
            Apply
          </a>
        </nav>
      </header>

      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav__link"
            >
              {l.label}
            </a>
          ))}
          <a href="#apply" onClick={() => setMobileMenuOpen(false)} className="mobile-nav__cta">
            Apply
          </a>
        </nav>
      )}
    </div>
  );
}
