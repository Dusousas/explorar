"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Main() {
  const prefersReduced = useReducedMotion();

  // Dividir o texto em caracteres mantendo os espaços
  const text = "#Vem explorar com a gente";
  const characters = text.split("");

  return (
    <>
      <section className="bgBanner1">
        <div className="maxW h-full flex flex-col justify-center items-center">
          <div>
            <motion.img
              src="/logo-explorar.png"
              alt="Explorar Viagens"
              className="w-[100px]"
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 1, scale: 1 }}
              animate={
                prefersReduced
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: [1, 0.5, 1],
                      scale: [1, 0.993, 1],
                    }
              }
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : {
                      duration: 2.0,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
            />
          </div>

          <h4 className="text-verdeP text-center tracking-wider text-2xl lg:text-3xl">
            {characters.map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : {
                        duration: 0.5,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }
                }
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h4>

          <h1 className="text-3xl text-center text-white uppercase mt-4 lg:text-6xl ">
            25 anos guiando experiências pedagógicas e de ecoturismo.
          </h1>

          <div className="mt-12">
            <a
              className="font-aleo bg-azulP text-white py-4 uppercase px-4 rounded"
              href="#destinos"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("roteiros");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Conheça nossos destinos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}