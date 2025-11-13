"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  href?: string;
  label: string;
  isSection?: boolean;
  children?: NavChild[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Sobre nós" },
  {
    label: "Serviços",
    href: "#services",
    isSection: true,
    children: [
      { href: "/pedagogicas", label: "Viagens Pedagógicas" },
      { href: "/ecoturismo", label: "Viagens Ecoturísticas" },
    ],
  },
  { href: "#roteiros", label: "Roteiros", isSection: true },
  { href: "#depoimentos", label: "Depoimentos", isSection: true },
  { href: "#contato", label: "Contato", isSection: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // sub-menu mobile
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
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      try {
        sessionStorage.setItem("scrollTarget", id);
      } catch {}
      router.push("/", { scroll: false });
      setOpen(false);
    }
  };

  const handleSectionClickMobile = (href: string) => {
    const id = href.replace("#", "");

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
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
          {navLinks.map((item) => (
            <li
              key={item.label}
              className={`relative ${item.children ? "group" : ""}`}
            >
              {item.children ? (
                <>
                  {/* Linha principal: label que rola + setinha, hover abre dropdown */}
                  <div className="flex items-center gap-1">
                    {/* Label que rola pra seção services */}
                    {item.isSection && item.href ? (
                      <Link
                        href="/"
                        className="hover:text-azulP/70 transition-colors cursor-pointer"
                        onClick={(e) => handleSectionClick(e, item.href!)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="hover:text-azulP/70 transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    )}
                    {/* Setinha (só visual, dropdown abre no hover do li) */}
                    <span className="text-xs">▾</span>
                  </div>

                  {/* Dropdown */}
                  <div
                    className="
                      invisible opacity-0 translate-y-2
                      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-200
                      absolute left-0 mt-2
                      bg-white rounded-lg shadow-lg py-2
                      min-w-[220px] z-50 uppercase
                    "
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 uppercase text-sm normal-case text-azulP hover:bg-black/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : item.isSection && item.href ? (
                <Link
                  href="/"
                  className="hover:text-azulP/70 transition-colors cursor-pointer"
                  onClick={(e) => handleSectionClick(e, item.href!)}
                >
                  {item.label}
                </Link>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-azulP/70 transition-colors"
                >
                  {item.label}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão hambúrguer (mobile) */}
      <button
        type="button"
        aria-label="Abrir menu"
        className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-azulP"
        onClick={() => setOpen(true)}
      >
        <FiMenu className="w-7 h-7" />
      </button>

      {/* Overlay + Drawer mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Fundo escuro */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Painel lateral */}
        <nav
          id="mobile-menu"
          aria-hidden={!open}
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          ref={panelRef}
        >
          {/* Cabeçalho */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-aleo uppercase text-azulP">Menu</span>
            <button
              type="button"
              aria-label="Fechar menu"
              className="p-2"
              onClick={() => setOpen(false)}
              ref={closeBtnRef}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <ul className="p-4 space-y-2 uppercase font-aleo text-azulP">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    {/* Linha Serviços no mobile:
                        - texto: rola pra seção
                        - setinha: abre/fecha submenu */}
                    <div className="flex w-full items-center justify-between rounded-lg hover:bg-black/5">
                      <button
                        type="button"
                        className="flex-1 text-left px-3 py-3"
                        onClick={() =>
                          item.href && handleSectionClickMobile(item.href)
                        }
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        className="px-3 py-3"
                        aria-label="Abrir sub-menu de serviços"
                        onClick={() => setServicesOpen((prev) => !prev)}
                      >
                        <span
                          className={`text-xs transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                    </div>

                    {servicesOpen && (
                      <ul className="mt-1 space-y-1 text-sm normal-case">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => {
                                setOpen(false);
                                setServicesOpen(false);
                              }}
                              className="block px-6 py-2 rounded-lg hover:bg-black/5"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.isSection && item.href ? (
                  <Link
                    href="/"
                    onClick={(e) => handleSectionClick(e, item.href!)}
                    className="block px-3 py-3 rounded-lg hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
