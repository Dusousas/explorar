"use client";

import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";

// CSS base do Swiper
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eduardo Sousa",
    text:
      "Experiência incrível! Tudo muito bem organizado, seguro e com guias atenciosos. Recomendo demais!",
  },
  {
    id: 2,
    name: "Mariana Ribeiro",
    text:
      "A viagem pedagógica superou nossas expectativas. Conteúdos alinhados e vivências transformadoras.",
  },
  {
    id: 3,
    name: "João Carvalho",
    text:
      "Equipe profissional do começo ao fim. Logística impecável e suporte rápido durante toda a viagem.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-azulS">
      <div className="maxW">
        <h4 className="text-center text-white text-2xl lg:text-3xl">Depoimentos</h4>
        <h2 className="text-center text-white text-4xl lg:text-5xl mt-4">
          Experiências de quem já foi
        </h2>

        <article className="mt-10">
          <FaQuoteRight className="mx-auto text-white text-3xl" />

          <Swiper
            modules={[Autoplay, Pagination, Keyboard, A11y]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            loop
            a11y={{ enabled: true }}
            className="mt-10 lg:w-[900px] mx-auto px-6"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  <p className="text-center mx-auto text-white lg:text-xl">
                    {item.text}
                  </p>
                  <p className="text-center mt-8 text-white font-semibold">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>
    </section>
  );
}
