"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function page() {
  const prefersReduced = useReducedMotion(); // <- declara aqui
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="maxW flex gap-20">
          <article className="lg:w-1/2">
            <img className="rounded-2xl" src="/card1.jpg" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h1 className="text-xl font-semibold text-azulP  text-center mt-10 lg:text-left lg:mt-0">
              Sobre nós
            </h1>
            <p className="leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              accusantium. Ullam nihil officiis mollitia minus hic excepturi
              ipsum labore iste culpa molestiae aperiam blanditiis, accusamus
              minima? Dolorem molestias porro quae!
            </p>
            <p className="leading-relaxed text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              accusantium. Ullam nihil officiis mollitia minus hic excepturi
              ipsum labore iste culpa molestiae aperiam blanditiis, accusamus
              minima? Dolorem molestias porro quae!
            </p>
            <p className="leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              accusantium. Ullam nihil officiis mollitia minus hic excepturi
              ipsum labore iste culpa molestiae aperiam blanditiis, accusamus
              minima? Dolorem molestias porro quae!
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                className="font-aleo bg-azulP text-sm text-white py-4 uppercase tracking-wider px-4 rounded"
                href=""
              >
                Entrar em contato
              </a>
            </div>
            <div className="mt-10">
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
                        opacity: [1, 0.5, 1], // fade suave
                        scale: [1, 0.993, 1], // micro “pulse”
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
          </article>
        </div>
      </section>
    </>
  );
}
