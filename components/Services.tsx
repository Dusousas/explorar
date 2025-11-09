import Link from "next/link";

export default function Services() {
  const camps = [
    {
      id: 1,
      title: "Viagens Pedagógicas",
      ages: "Aprendizado que vai além da sala de aula",
      image: "/card1.jpg",
      description:
        "As viagens pedagógicas são experiências educativas que unem conhecimento, cultura e diversão. Cada roteiro é planejado para complementar o conteúdo escolar e proporcionar vivências reais que estimulam a curiosidade, o trabalho em equipe e o senso crítico dos alunos. Uma forma envolvente e inesquecível de aprender na prática.",
      bgColor: "bg-azulP",
    },
    {
      id: 2,
      title: "Sobre nós",
      ages: "Vem explorar com a gente",
      image: "/card1.jpg",
      description:
        "Desafios emocionantes e aventuras radicais para adolescentes corajosos. Desenvolva habilidades de liderança e trabalho em equipe!",
      bgColor: "bg-azulP",
    },
    {
      id: 3,
      title: "Viagens Ecoturísticas",
      ages: "Conecte-se com a natureza e descubra novos horizontes",
      image: "/card1.jpg",
      description:
        "As viagens ecoturísticas convidam você a explorar paisagens naturais preservadas, trilhas, cachoeiras e reservas ambientais com consciência e respeito ao meio ambiente. São experiências que unem lazer, aventura e sustentabilidade, promovendo uma verdadeira imersão na beleza e na importância da natureza.",
      bgColor: "bg-azulP",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="maxW">
          <h4 className="text-center text-verdeP text-2xl lg:text-3xl">Bem-vindo à</h4>
          <h2 className="text-center text-azulP text-4xl lg:text-5xl mt-4">Explorar viagens</h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => {
              const Card = (
                <article
                  key={camp.id}
                  className="relative w-full rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
                >
                  <img className="w-full h-[500px] object-cover" src={camp.image} alt={camp.title} />

                  {/* Overlay colorido que expande no hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 ${camp.bgColor} transition-all duration-500 ease-in-out group-hover:h-[80%] h-[40%] rounded-t-3xl`}
                  >
                    <div className="p-8 text-center">
                      <h2 className="text-white text-4xl tracking-widest">{camp.title}</h2>
                      <p className="text-white/80 text-lg mt-2">{camp.ages}</p>

                      {/* Parágrafo que aparece no hover */}
                      <p className="text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {camp.description}
                      </p>
                    </div>
                  </div>
                </article>
              );

              // Apenas o "Sobre nós" vira link
              if (camp.title === "Sobre nós") {
                return (
                  <Link
                    key={camp.id}
                    href="/sobre-nos"
                    className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azulP rounded-3xl"
                    aria-label="Ir para a página Sobre nós"
                  >
                    {Card}
                  </Link>
                );
              }

              return Card;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
