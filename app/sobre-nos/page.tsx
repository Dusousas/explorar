"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Page() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <h1 className="text-3xl tracking-wider text-blue-600 relative">
              Sobre nós
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></div>
            </h1>
          </div>
        </motion.div>

        {/* CONTEÚDO PRINCIPAL - GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* IMAGEM PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                className="relative rounded-2xl w-full object-cover shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
                src="/card1.jpg"
                alt="Explorar Viagens - Estudos do Meio"
              />
            </div>
          </motion.div>

          {/* TEXTO INTRODUTÓRIO */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="leading-relaxed text-gray-700 text-lg">
              O <strong className="text-gray-900">Estudo do Meio</strong> é uma experiência que transcende a
              sala de aula. Para garantir que essa vivência com seus alunos seja
              verdadeiramente educativa, segura e tranquila, conte com a
              experiência da <strong className="text-gray-900">Explorar Viagens</strong>, uma agência
              especializada em projetos escolares.
            </p>

            <p className="leading-relaxed text-gray-700 text-lg">
              A <strong className="text-gray-900">Explorar Viagens</strong> é referência na organização de
              Estudos do Meio, oferecendo soluções completas para escolas que
              buscam excelência pedagógica, segurança e tranquilidade em cada
              etapa da viagem.
            </p>

          </motion.div>
        </div>

        {/* DIFERENCIAIS - TÍTULO */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl tracking-wider text-green-600 relative inline-block">
            Por que escolher a Explorar Viagens?
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
          </h2>
        </motion.div>

        {/* DIFERENCIAIS - GRID DE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Segurança em primeiro lugar",
              description: "Viagens acompanhadas por bombeiro, equipe treinada em primeiros socorros e seguro assistência durante toda a viagem, garantindo proteção total aos alunos e tranquilidade às famílias e à escola."
            },
            {
              title: "Aprendizado com propósito",
              description: "Atuação de equipe pedagógica e guias especializados, com metodologia acessível às crianças, linguagem adequada e atividades alinhadas aos objetivos educacionais da escola."
            },
            {
              title: "Alunos engajados",
              description: "Programação com brincadeiras criativas e atividades dirigidas, promovendo interação, organização do grupo e aprendizado de forma lúdica e significativa."
            },
            {
              title: "Planejamento completo",
              description: "Roteiros pedagógicos estruturados, agendamento com fornecedores, logística organizada e cronograma definido, evitando imprevistos e sobrecarga para a equipe escolar."
            },
            {
              title: "Tranquilidade para a unidade escolar",
              description: "A escola conta com uma equipe experiente da Explorar Viagens, responsável por toda a operação, inclusive pagamentos, permitindo foco total no acompanhamento educacional."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <strong className="text-gray-900 block mb-3 text-lg">{item.title}</strong>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* CARD CTA NO GRID */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <h3 className="text-white font-semibold text-xl mb-4">Pronto para começar?</h3>
            <p className="text-blue-100 mb-6">Entre em contato e organize uma experiência inesquecível</p>
            <motion.a
              className="bg-white text-blue-600 font-semibold py-3 uppercase tracking-wider px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block text-sm"
              href="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar em contato
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}