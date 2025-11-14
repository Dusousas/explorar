"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const ECO_TOPIC = {
  badge: "ecoturismo educativo",
  title: "Imersão Explorar Ecoturismo",
  description:
    "Desenhamos expedições exclusivas que conectam os objetivos pedagógicos da sua instituição com áreas naturais preservadas. A cada parada, nossa equipe coordena dinâmicas investigativas, momentos de contemplação e diálogos com comunidades guardiãs do território.",
  sections: [
    {
      label: "Experiências centrais",
      items: [
        "Trilhas interpretativas com guias locais, materiais de campo e registro coletivo de descobertas.",
        "Vivências comunitárias ao lado de guardiões e guardiãs das unidades de conservação.",
        "Oficinas de educação climática e práticas regenerativas para aplicar em projetos escolares.",
      ],
    },
    {
      label: "Competências e valores",
      items: [
        "Fortalecer senso de pertencimento e responsabilidade socioambiental.",
        "Desenvolver pesquisa em campo com registros, mapas sensoriais e hipóteses colaborativas.",
        "Estimular projetos autorais inspirados na biodiversidade brasileira.",
      ],
    },
  ],
  logistics: [
    {
      label: "Regiões sugeridas",
      value: "Mata Atlântica, Costa Verde, chapadas, cerrados e áreas serranas.",
    },
    {
      label: "Duração",
      value: "2 a 4 dias de imersão guiada com hospedagem em pousadas parceiras.",
    },
    {
      label: "Equipe Explorar",
      value: "Coordenação ambiental + condutores locais credenciados + monitoria 24h.",
    },
  ],
} as const;

const EXPERIENCE_CARDS = [
  {
    title: "Trilhas assinatura",
    description:
      "Roteiros autorais com mapas de interpretação, checkpoints com desafios científicos e momentos de contemplação guiada.",
  },
  {
    title: "Imersão cultural",
    description:
      "Encontros com comunidades tradicionais para aprender sobre manejo sustentável, gastronomia local e narrativas ancestrais.",
  },
  {
    title: "Laboratório de campo",
    description:
      "Oficinas práticas de qualidade da água, observação de fauna, registros fotográficos responsáveis e diários de bordo.",
  },
] as const;

const IMPACT_COMMITMENTS = [
  {
    label: "Sustentabilidade aplicada",
    detail:
      "Inventário de resíduos, cálculo simplificado da pegada de carbono e plano de compensação em parceria com projetos de restauração.",
  },
  {
    label: "Segurança integrada",
    detail:
      "Protocolos com briefing pré-viagem, monitoramento constante, kits de primeiros socorros e comunicação direta com a escola.",
  },
  {
    label: "Conteúdo para pós-viagem",
    detail:
      "Materiais digitais para síntese das descobertas, sugestões de atividades em sala e relatórios que conectam BNCC e itinerários.",
  },
] as const;

export default function EcoturismoPage() {
  const prefersReduced = useReducedMotion();
  const text = "Natureza viva, memórias que transformam!";
  const characters = text.split("");

  return (
    <section className="bg-gray-100 py-20">
      <div className="maxW space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-verdeP">
            ecoturismo
          </p>
          <h1 className="text-3xl font-semibold text-azulP md:text-5xl">
            Roteiros educativos em natureza para todos os ciclos
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            A Explorar assume toda a curadoria para que sua turma vivencie a
            biodiversidade brasileira com segurança, propósito pedagógico e
            logística completa. Uma única jornada, sem submenus, com todos os
            detalhes que você precisa para decidir.
          </p>
        </div>

        <h4 className="text-center text-2xl tracking-wider text-verdeP lg:text-3xl">
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              style={{ display: "inline-block" }}
              initial={
                prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
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

        <article className="space-y-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-verdeP">
              {ECO_TOPIC.badge}
            </p>
            <h2 className="text-2xl font-semibold text-azulP md:text-3xl">
              {ECO_TOPIC.title}
            </h2>
            <p className="text-gray-600">{ECO_TOPIC.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ECO_TOPIC.sections.map((section) => (
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
                      <span className="text-verdeP">{"\u2022"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {ECO_TOPIC.logistics.map((info) => (
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
              Quer adaptar o roteiro para um projeto específico, incluir oficinas
              temáticas ou ampliar o tempo de campo? Conte com nossa curadoria
              ambiental para ajustar a viagem ao seu planejamento.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-azulP px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-azulP/90"
            >
              Falar com um especialista
            </a>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-verdeP">
                trilha destaque
              </p>
              <h3 className="mt-2 text-xl font-semibold text-azulP">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white/70 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-verdeP">
            compromisso Explorar
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-azulP">
            Planejamento integrado para deixar sua equipe tranquila
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {IMPACT_COMMITMENTS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-azulP">
                  {item.label}
                </p>
                <p className="mt-3 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
