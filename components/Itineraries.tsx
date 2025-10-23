"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { roteiros } from "@/app/src/data/roteiros"; // ajuste o alias se necessário

export default function Itineraries() {
  return (
    <section className="py-20 bg-amareloP">
      <div className="maxW">
        <h4 className="text-center text-white text-2xl lg:text-3xl">Roteiros</h4>
        <h2 className="text-center text-white text-4xl lg:text-5xl mt-4 mb-12">
          Roteiros em Destaque
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {roteiros.map((roteiro) => (
            <SwiperSlide key={roteiro.id}>
              <div className="rounded-2xl p-4 overflow-hidden hover:bg-[#f2a727] transition-shadow duration-300 group flex flex-col h-[550px]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={roteiro.image}
                    alt={roteiro.titulo}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute top-4 right-4 bg-white text-azulP px-4 py-2 rounded-full text-sm font-semibold">
                    {roteiro.duracao}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-azulP text-sm font-semibold uppercase tracking-wide mb-2">
                    {roteiro.subtitulo}
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {roteiro.titulo}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-6 flex-grow">
                    {roteiro.descricao}
                  </p>

                  <Link
                    href={`/itinerarios/${roteiro.slug}`}
                    className="w-full bg-azulP text-white text-center py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 mt-auto"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
