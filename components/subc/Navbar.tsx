"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Sobre nós" },
  { href: "#services", label: "Serviços", isSection: true },
  { href: "#roteiros", label: "Roteiros", isSection: true },
  { href: "#depoimentos", label: "Depoimentos", isSection: true },
  { href: "#contato", label: "Contato", isSection: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const id = href.replace("#", "");
    e.preventDefault();

    if (pathname === "/") {
      // Já está na Home: apenas rolar
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      // Outra página: salvar alvo, ir pra Home e rolar lá
      try {
        sessionStorage.setItem("scrollTarget", id);
      } catch {}
      router.push("/", { scroll: false });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Navbar desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 uppercase font-aleo text-azulP">
          {navLinks.map((l) => (
            <li key={l.href}>
              {l.isSection ? (
                <Link
                  href="/"
                  className="hover:text-azulP/70 transition-colors cursor-pointer"
                  onClick={(e) => handleSectionClick(e, l.href)}
                >
                  {l.label}
                </Link>
              ) : (
                <Link href={l.href} className="hover:text-azulP/70 transition-colors">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão hambúrguer aqui... */}

      {/* Overlay + Drawer mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* fundo escuro... */}

        {/* Painel lateral */}
        <nav
          id="mobile-menu"
          aria-hidden={!open}
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          ref={panelRef}
        >
          {/* cabeçalho... */}

          <ul className="p-4 space-y-2 uppercase font-aleo text-azulP">
            {navLinks.map((l) => (
              <li key={l.href}>
                {l.isSection ? (
                  <Link
                    href="/"
                    onClick={(e) => handleSectionClick(e, l.href)}
                    className="block px-3 py-3 rounded-lg hover:bg-black/5"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg hover:bg-black/5"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
