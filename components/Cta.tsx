import React from "react";

export default function Cta() {
  return (
    <section className="relative bgCta bg-cover bg-center flex flex-col justify-center items-center text-center py-20 px-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 blur-2xl " />
      {/* conteúdo */}
      <div className="relative maxW">
        <h4 className="text-center text-white text-2xl tracking-wider lg:text-3xl">
          Ecoturismo & Pedagogia
        </h4>
        <h2 className="text-center text-white text-4xl lg:text-5xl mt-6 ">
          Pronto para o próximo roteiro?
        </h2>
        <p className="mt-6 text-white">
          Estudos do meio, trilhas e experiências guiadas por especialistas, com
          materiais didáticos e acompanhamento antes, durante e depois.
        </p>

                  <div className="mt-12">
            <a className="font-aleo bg-azulP text-white py-4 uppercase px-4 rounded" href="">
              Falar com um especialista
            </a>
          </div>
      </div>
    </section>
  );
}
