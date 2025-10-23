"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/roteiros", label: "Roteiros" },
  { href: "/depoimentos", label: "Depoimentos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // trava o scroll quando o menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 10);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // fecha com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // fecha clicando fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Navbar desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 uppercase font-aleo text-azulP">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-azulP/70 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão hambúrguer (mobile) */}
      <button
        aria-label="Abrir menu"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg border border-black/10"
      >
        <FiMenu className="h-6 w-6 text-azulP" />
      </button>

      {/* Overlay + Drawer mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Fundo escuro */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Painel lateral */}
        <nav
          id="mobile-menu"
          aria-hidden={!open}
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          ref={panelRef}
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-black/5">
            <span className="font-aleo text-azulP text-lg font-bold">Menu</span>
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="p-2 rounded-lg border border-black/10"
            >
              <FiX className="h-6 w-6 text-azulP" />
            </button>
          </div>

          <ul className="p-4 space-y-2 uppercase font-aleo text-azulP">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
