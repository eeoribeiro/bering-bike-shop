"use client";

import { useState } from "react";

const links = [
  ["Bicicletas", "#bikes"],
  ["Oficina", "#oficina"],
  ["A loja", "#sobre"],
  ["Dúvidas", "#faq"],
  ["Contato", "#contato"],
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobileMenu ${open ? "isOpen" : ""}`}>
      <button
        className="menuButton"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span /><span />
      </button>
      <nav id="mobile-navigation" aria-label="Navegação para celular">
        {links.map(([label, href], index) => (
          <a href={href} onClick={() => setOpen(false)} key={href}>
            <span>{String(index + 1).padStart(2, "0")}</span>{label}
          </a>
        ))}
      </nav>
    </div>
  );
}
