"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre nós", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bgheader)]/95 backdrop-blur-md shadow-lg"
          : "bg-[var(--bgheader)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xl transition-all duration-300 group-hover:glow-primary group-hover:scale-105">
            A
          </div>
          <span className="text-xl font-bold text-header-foreground tracking-wide">
            Aldi <span className="text-primary">Vidros</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-2 rounded-lg text-sm font-medium text-header-foreground/80 transition-all duration-300 hover:text-primary-foreground hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(152_60%_36%/0.3)] relative"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5561996517827"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground glow-primary-hover"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-header-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-header/95 backdrop-blur-md border-t border-primary/20 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-header-foreground/80 hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5561996517827"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 rounded-lg text-center font-semibold bg-primary text-primary-foreground"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
