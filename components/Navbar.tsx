"use client";

import { useEffect, useState } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled || open
          ? "border-cyan/10 bg-base/90 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="font-mono text-lg font-bold tracking-[-0.08em] text-cyan" aria-label="Back to top">
          HS_
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-mid transition hover:text-cyan"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-cyan/60 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan transition hover:bg-cyan hover:text-base md:block"
        >
          Hire Me
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-cyan/20 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <i className={`block h-px w-5 bg-cyan transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <i className={`block h-px w-5 bg-cyan transition ${open ? "opacity-0" : ""}`} />
            <i className={`block h-px w-5 bg-cyan transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      {open && (
        <div className="page-shell flex flex-col border-t border-cyan/10 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-mono text-xs uppercase tracking-widest text-mid"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
