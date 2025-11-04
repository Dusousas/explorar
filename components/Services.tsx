export default function Services() {
  const camps = [
    {
      id: 1,
      title: "Mini Camp",
      ages: "ages 11-13",
      image: "/card1.jpg",
      description: "Uma experiência incrível de acampamento para jovens aventureiros. Atividades ao ar livre, novas amizades e momentos inesquecíveis esperam por você!",
      bgColor: "bg-azulP"
    },
    {
      id: 2,
      title: "Sobre nós",
      ages: "Vem explorar com a gente",
      image: "/card1.jpg",
      description: "Desafios emocionantes e aventuras radicais para adolescentes corajosos. Desenvolva habilidades de liderança e trabalho em equipe!",
      bgColor: "bg-azulP"
    },
    {
      id: 3,
      title: "Explorer Camp",
      ages: "ages 17-19",
      image: "/card1.jpg",
      description: "Expedições intensas e exploração profunda da natureza. Prepare-se para uma jornada transformadora de autodescoberta!",
      bgColor: "bg-azulP"
    }
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="maxW">
          <h4 className="text-center text-verdeP text-2xl lg:text-3xl">
            Bem-vindo à
          </h4>
          <h2 className="text-center text-azulP text-4xl lg:text-5xl mt-4">
            Explorar viagens
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => (
              <article 
                key={camp.id}
                className="relative w-full rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  className="w-full h-[500px] object-cover" 
                  src={camp.image} 
                  alt={camp.title} 
                />
                
                {/* Overlay colorido que expande no hover */}
                <div className={`absolute bottom-0 left-0 right-0 ${camp.bgColor} transition-all duration-500 ease-in-out group-hover:h-[80%] h-[40%] rounded-t-3xl`}>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}