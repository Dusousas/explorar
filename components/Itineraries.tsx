"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { roteiros } from "@/app/src/data/roteiros";

// --- helpers (SEO + busca esperta) ---
function normalizeText(s: string) {
  return (s ?? "")
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ") // limpa símbolos
    .replace(/\s+/g, " ")
    .trim();
}

function expandQuerySynonyms(queryRaw: string) {
  const q = normalizeText(queryRaw);

  const extras: string[] = [];

  // Fundamental I/II por número ou romano
  if (/\b1\b/.test(q) || /\bi\b/.test(q)) {
    extras.push(
      "fundamental i",
      "fundamental 1",
      "fundamental um",
      "fund 1",
      "fund i",
    );
  }
  if (/\b2\b/.test(q) || /\bii\b/.test(q)) {
    extras.push(
      "fundamental ii",
      "fundamental 2",
      "fundamental dois",
      "fund 2",
      "fund ii",
    );
  }

  // Infantil
  if (
    q.includes("infantil") ||
    q.includes("crianca") ||
    q.includes("criancas")
  ) {
    extras.push("educacao infantil", "infantil", "ed infantil");
  }

  // Ensino médio
  if (q.includes("medio") || q.includes("médio") || q.includes("em")) {
    extras.push("ensino medio", "medio", "ensino médio", "em");
  }

  // Pernoite (muita gente pesquisa isso)
  if (q.includes("pernoite") || q.includes("hotel") || q.includes("dormir")) {
    extras.push("pernoite");
  }

  // Museus
  if (q.includes("museu") || q.includes("museus")) {
    extras.push("museus", "museu");
  }

  // Também adiciona versões “romanas ↔ números” diretamente
  // Ex: se digitar 2, também considerar "ii"; se digitar ii, considerar "2"
  if (/\b2\b/.test(q)) extras.push("ii");
  if (/\bii\b/.test(q)) extras.push("2");
  if (/\b1\b/.test(q)) extras.push("i");
  if (/\bi\b/.test(q)) extras.push("1");

  // devolve lista única
  return Array.from(new Set([q, ...extras].map(normalizeText))).filter(Boolean);
}

export default function Itineraries() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoteiros = useMemo(() => {
    const terms = expandQuerySynonyms(searchTerm);
    if (!terms.length) return roteiros;

    return roteiros.filter((roteiro) => {
      const haystack = normalizeText(
        [
          roteiro.titulo,
          roteiro.subtitulo,
          roteiro.localizacao,
          roteiro.categoria,
          ...(roteiro.publico ?? []),
        ].join(" "),
      );

      // se QUALQUER termo expandido bater, retorna
      return terms.some((t) => haystack.includes(t));
    });
  }, [searchTerm]);

  return (
    <section id="roteiros" className="py-20 bg-azulS">
      <div className="maxW">
        <h4 className="text-center text-white text-2xl lg:text-3xl">
          Roteiros
        </h4>
        <h2 className="text-center text-white text-4xl lg:text-5xl mt-4 mb-10">
          Roteiros em Destaque
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder='Pesquisar por destino, tema ou público (ex: "2", "II", "Fundamental 2")...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-lg bg-azulP text-white placeholder-white/60 border border-azulP hover:border-white focus:border-white focus:outline-none transition-all duration-300"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {searchTerm && (
            <p className="text-white/80 text-sm mt-2">
              {filteredRoteiros.length} roteiro(s) encontrado(s)
            </p>
          )}
        </div>

        {filteredRoteiros.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white text-lg mb-2">
              Nenhum roteiro encontrado para "{searchTerm}"
            </p>
            <p className="text-white/60 text-sm">
              Dica: tente “2”, “II”, “Fundamental 2”, “Museus”, “Pernoite”…
            </p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 select-none"
            key={filteredRoteiros.length}
            noSwiping={false}
            preventClicks={true}
            preventClicksPropagation={true}
            touchStartPreventDefault={true}
          >
            {filteredRoteiros.map((roteiro) => (
              <SwiperSlide key={roteiro.id}>
                <div className="rounded-2xl p-4 overflow-hidden hover:bg-azulP transition-shadow duration-300 group flex flex-col min-h-[680px]">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={roteiro.image}
                      alt={roteiro.titulo}
                      className="w-full h-full object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-5 flex flex-col flex-grow">
                    <p className="text-white text-xs sm:text-sm tracking-widest uppercase mb-2 opacity-90">
                      {roteiro.localizacao}
                    </p>

                    <h3 className="text-white text-2xl lg:text-[26px] font-bold leading-tight mb-2">
                      {roteiro.titulo}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {!!roteiro.categoria && (
                        <span className="text-white/90 text-xs px-3 py-1 rounded-full border border-white/30 bg-white/10">
                          {roteiro.categoria}
                        </span>
                      )}
                      {(roteiro.publico ?? []).map((p) => (
                        <span
                          key={`${roteiro.id}-${p}`}
                          className="text-white/90 text-xs px-3 py-1 rounded-full border border-white/30 bg-white/10"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <p
                      className="text-white text-sm leading-relaxed mb-6 flex-grow opacity-95 overflow-hidden max-h-[190px]"
                      title={roteiro.subtitulo}
                    >
                      {roteiro.subtitulo}
                    </p>

                    <Link
                      href={`/itinerarios/${roteiro.slug}`}
                      className="w-full bg-azulP text-sm border border-azulP hover:border-white group-hover:border-white text-white text-center py-3 rounded-lg uppercase hover:bg-opacity-90 transition-all duration-300 mt-auto"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
