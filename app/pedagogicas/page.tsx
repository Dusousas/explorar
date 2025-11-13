"use client";

import React, { useState } from "react";

const SUBTOPICS = [
  {
    id: "infantil",
    title: "Ensino Infantil",
    description:
      "Propostas lúdicas e sensoriais que apresentam o mundo fora da escola com segurança. Fazendas pedagógicas, trilhas curtinhas e oficinas artísticas despertam a curiosidade das crianças e conectam o conteúdo vivido em sala às experiências do dia.",
    sections: [
      {
        label: "Objetivos pedagógicos",
        items: [
          "Trabalhar autonomia de forma orientada e acolhedora.",
          "Estimular a relação com a natureza por meio de texturas, sons e aromas.",
          "Fortalecer vínculos entre turma, famílias e educadoras.",
        ],
      },
      {
        label: "Experiências sugeridas",
        items: [
          "Vivências em fazendas urbanas com alimentação saudável.",
          "Circuitos psicomotores e contação de histórias ao ar livre.",
          "Ateliê de tintas naturais e brinquedos cantados regionais.",
        ],
      },
    ],
    logistics: [
      { label: "Duração sugerida", value: "Turnos de 4h ou 1 dia completo" },
      { label: "Período ideal", value: "Março a Novembro" },
      {
        label: "Equipe Explorar",
        value: "Coordenadora pedagógica + monitores brincantes",
      },
    ],
  },
  {
    id: "fundamental1",
    title: "Ensino Fundamental 1",
    description:
      "Aqui as viagens conectam alfabetização, artes e ciências em roteiros mão na massa. Os roteiros favorecem a interdisciplinaridade e incentivam a investigação guiada, com linguagem acessível e desafios colaborativos.",
    sections: [
      {
        label: "Objetivos pedagógicos",
        items: [
          "Explorar conteúdos de ciências da natureza e história local.",
          "Ampliar repertório cultural com visitas mediadas e oficinas criativas.",
          "Desenvolver responsabilidade coletiva em pequenos desafios.",
        ],
      },
      {
        label: "Experiências sugeridas",
        items: [
          "Museus interativos com jogos de investigação.",
          "Roteiros histórico-culturais com caça ao tesouro educativo.",
          "Trilhas interpretativas em unidades de conservação.",
        ],
      },
    ],
    logistics: [
      { label: "Duração sugerida", value: "1 a 2 dias (com pernoite opcional)" },
      { label: "Período ideal", value: "Ano todo" },
      {
        label: "Equipe Explorar",
        value: "Coord. pedagógica + monitores especialistas por área",
      },
    ],
  },
  {
    id: "fundamental2",
    title: "Ensino Fundamental 2",
    description:
      "Viagens investigativas que conectam ciência, cidadania e tecnologia. Trabalhamos com metodologias de projetos, uso de diários de bordo e desafios que estimulam pensamento crítico e autoria.",
    sections: [
      {
        label: "Objetivos pedagógicos",
        items: [
          "Aplicar conhecimentos de ciências e geografia em contextos reais.",
          "Promover protagonismo juvenil em atividades de campo.",
          "Discutir sustentabilidade, culturas locais e impacto social.",
        ],
      },
      {
        label: "Experiências sugeridas",
        items: [
          "Laboratórios vivos em parques tecnológicos ou universidades.",
          "Expedições científicas com coleta e leitura de dados.",
          "Vivências comunitárias com projetos de intervenção.",
        ],
      },
    ],
    logistics: [
      { label: "Duração sugerida", value: "2 a 4 dias com imersão guiada" },
      { label: "Período ideal", value: "Preferencialmente outono/primavera" },
      {
        label: "Equipe Explorar",
        value: "Coordenador líder + monitores temáticos + apoio 24h",
      },
    ],
  },
  {
    id: "medio",
    title: "Ensino Médio",
    description:
      "Imersões temáticas voltadas para projetos de vida, vestibulares e internacionalização. O grupo vivencia oficinas com especialistas e visitas técnicas que aproximam teoria, tendências de mercado e desenvolvimento socioemocional.",
    sections: [
      {
        label: "Objetivos pedagógicos",
        items: [
          "Relacionar itinerários formativos a contextos profissionais reais.",
          "Trabalhar competências socioemocionais em desafios de alta complexidade.",
          "Oferecer repertório para escolha de áreas de atuação.",
        ],
      },
      {
        label: "Experiências sugeridas",
        items: [
          "Roteiros STEAM com universidades parceiras.",
          "Programas de voluntariado e impacto social.",
          "Itinerários culturais em capitais brasileiras ou países vizinhos.",
        ],
      },
    ],
    logistics: [
      { label: "Duração sugerida", value: "3 a 6 dias com agenda intensiva" },
      { label: "Período ideal", value: "Janeiro, julho ou janelas entre provas" },
      {
        label: "Equipe Explorar",
        value: "Coordenação sênior + especialistas convidados",
      },
    ],
  },
  {
    id: "universitario",
    title: "Universitário",
    description:
      "Viagens técnicas, missões acadêmicas e programas de internacionalização que aprofundam pesquisas e networking profissional. Desenhamos trilhas customizadas com mentores, visitas a empresas e encontros com lideranças locais.",
    sections: [
      {
        label: "Objetivos pedagógicos",
        items: [
          "Conectar pesquisa acadêmica a desafios reais do setor produtivo.",
          "Apoiar disciplinas de campo, TCCs e grupos de extensão.",
          "Gerar networking com instituições parceiras no Brasil e exterior.",
        ],
      },
      {
        label: "Experiências sugeridas",
        items: [
          "Missões internacionais com workshops exclusivos.",
          "Imersões em parques tecnológicos e incubadoras.",
          "Expedições científicas com apoio logístico completo.",
        ],
      },
    ],
    logistics: [
      { label: "Duração sugerida", value: "5 a 10 dias, conforme objetivo" },
      { label: "Período ideal", value: "De acordo com calendário acadêmico" },
      {
        label: "Equipe Explorar",
        value: "Curadoria acadêmica + produtores locais + suporte 24/7",
      },
    ],
  },
] as const;

export default function PedagogicasPage() {
  const [activeId, setActiveId] = useState<(typeof SUBTOPICS)[number]["id"]>(
    SUBTOPICS[0].id
  );

  const activeTopic =
    SUBTOPICS.find((topic) => topic.id === activeId) ?? SUBTOPICS[0];

  return (
    <section className="bg-gray-100 py-20">
      <div className="maxW space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-verdeP ">
            viagens pedagógicas
          </p>
          <h1 className="text-3xl font-semibold text-azulP md:text-5xl">
            Conteúdos vivos para cada etapa de aprendizagem
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Selecione o segmento para ver objetivos, experiências sugeridas e
            como nossa equipe acompanha cada roteiro. Tudo acontece na mesma
            página para ficar prático de comparar e decidir.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {SUBTOPICS.map((topic) => {
            const isActive = topic.id === activeId;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveId(topic.id)}
                aria-pressed={isActive}
                className={`rounded-2xl cursor-pointer border px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isActive
                    ? "border-azulP bg-white text-azulP shadow-lg"
                    : "border-gray-200 bg-white/60 text-gray-600 hover:border-azulP/40 hover:text-azulP"
                }`}
              >
                <span className="block text-sm font-semibold uppercase tracking-wide">
                  {topic.title}
                </span>
              </button>
            );
          })}
        </div>

        <article className="space-y-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-verdeP">
              segmento
            </p>
            <h2 className="text-2xl font-semibold text-azulP md:text-3xl">
              {activeTopic.title}
            </h2>
            <p className="text-gray-600">{activeTopic.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {activeTopic.sections.map((section) => (
              <div
                key={section.label}
                className="h-full rounded-2xl border border-gray-100 bg-gray-50/80 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-azulP">
                  {section.label}
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-verdeP">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {activeTopic.logistics.map((info) => (
              <div
                key={info.label}
                className="rounded-2xl border border-gray-100 bg-white/70 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-verdeP">
                  {info.label}
                </p>
                <p className="mt-3 text-lg font-medium text-gray-900">
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-azulP/40 bg-azulP/5 p-6 text-center md:text-left lg:flex-row lg:items-center lg:justify-between">
            <p className="text-gray-700">
              Precisa adaptar o roteiro para um projeto específico? Nossa equipe
              pedagógica desenha experiências exclusivas com monitoria completa.
            </p>
            <a
              href="/contato"
              className="inline-flex text-center items-center justify-center rounded-full bg-azulP px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-azulP/90"
            >
              Falar com um especialista
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
