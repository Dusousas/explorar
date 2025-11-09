"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { roteiros } from "@/app/src/data/roteiros";

export default function Itineraries() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar roteiros baseado no termo de pesquisa
  const filteredRoteiros = roteiros.filter((roteiro) => {
    const search = searchTerm.toLowerCase();
    return (
      roteiro.titulo.toLowerCase().includes(search) ||
      roteiro.subtitulo.toLowerCase().includes(search) ||
      roteiro.localizacao.toLowerCase().includes(search)
    );
  });

  return (
    <section id="roteiros" className="py-20 bg-azulS">
      <div className="maxW">
        <h4 className="text-center text-white text-2xl lg:text-3xl">Roteiros</h4>
        <h2 className="text-center text-white text-4xl lg:text-5xl mt-4 mb-8">
          Roteiros em Destaque
        </h2>

        {/* Campo de Pesquisa */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar roteiros por título, descrição ou localização..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-lg bg-azulP text-white placeholder-white/60 border border-azulP hover:border-white focus:border-white focus:outline-none transition-all duration-300"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Mensagem quando não há resultados */}
        {filteredRoteiros.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white text-lg mb-2">
              Nenhum roteiro encontrado para "{searchTerm}"
            </p>
            <p className="text-white/60 text-sm">
              Tente pesquisar com outros termos
            </p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
            key={searchTerm} // Força re-render do Swiper quando a pesquisa muda
          >
            {filteredRoteiros.map((roteiro) => (
              <SwiperSlide key={roteiro.id}>
                <div className="rounded-2xl p-4 overflow-hidden hover:bg-azulP transition-shadow duration-300 group flex flex-col h-[550px]">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={roteiro.image}
                      alt={roteiro.titulo}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>

                  <div className="pt-4 flex flex-col flex-grow">
                    <p className="text-white text-sm tracking-widest uppercase tracking-wide mb-2">
                      {roteiro.localizacao}
                    </p>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {roteiro.titulo}
                    </h3>
                    <p className="text-white text-sm leading-relaxed mb-6 flex-grow">
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