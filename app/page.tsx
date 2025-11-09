"use client";

import { useEffect } from "react";
import Services from "@/components/Services";
import Main from "@/components/Main";
import Testimonials from "@/components/Testimonials";
import Itineraries from "@/components/Itineraries";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    // tenta obter a altura do header (ex.: <header id="site-header">...</header>)
    const getHeaderOffset = () => {
      const header = document.getElementById("site-header");
      // margem extra de 8px para respiro
      return (header?.offsetHeight ?? 72) + -90;
    };

    const scrollWithOffset = (el: HTMLElement) => {
      const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const tryScrollById = (id: string, attempts = 20) => {
      const el = document.getElementById(id);
      if (el) {
        scrollWithOffset(el);
        // limpa o alvo para não repetir em futuros loads
        try {
          sessionStorage.removeItem("scrollTarget");
        } catch {}
        // se por acaso a pessoa chegou com /#id, limpamos o hash da URL
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname);
        }
        return;
      }
      // tenta novamente até as seções renderizarem
      if (attempts > 0) {
        requestAnimationFrame(() => tryScrollById(id, attempts - 1));
      }
    };

    try {
      const idFromSession = sessionStorage.getItem("scrollTarget");
      if (idFromSession) {
        tryScrollById(idFromSession);
        return;
      }
    } catch {}

    // Fallback: se entrou direto com /#services, também tratamos e limpamos o hash
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      tryScrollById(hash);
    }
  }, []);

  return (
    <>
      {/* Se usar header fixo, dê id="site-header" no seu Header para o offset ficar exato */}
      <Main />

      <section id="services">
        <Services />
      </section>

      <section id="roteiros">
        <Itineraries />
      </section>

      <section id="cta">
        <Cta />
      </section>

      <section id="depoimentos">
        <Testimonials />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </>
  );
}
