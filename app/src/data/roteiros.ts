// app/src/data/roteiros.ts
export type Roteiro = {
  id: number;
  titulo: string;
  subtitulo: string;
  duracao: string;
  descricao: string;
  image: string;
  slug: string;
};

export const roteiros: Roteiro[] = [
  {
    id: 1,
    titulo: "Serra da Mantiqueira",
    subtitulo: "Ecoturismo e Aventura",
    duracao: "3 dias",
    descricao: "Trilhas ecológicas, cachoeiras e biodiversidade da Mata Atlântica",
    image: "/card1.jpg",
    slug: "serra-da-mantiqueira",
  },
  {
    id: 2,
    titulo: "Pantanal Sul-Mato-Grossense",
    subtitulo: "Estudo da Fauna",
    duracao: "5 dias",
    descricao: "Observação de animais silvestres e ecossistemas aquáticos",
    image: "/card1.jpg",
    slug: "pantanal-sul-mato-grossense",
  },
  {
    id: 3,
    titulo: "Parque Nacional Chapada Diamantina",
    subtitulo: "Geografia e Geologia",
    duracao: "4 dias",
    descricao: "Formações rochosas, grutas e estudo do relevo brasileiro",
    image: "/card1.jpg",
    slug: "chapada-diamantina",
  },
  {
    id: 4,
    titulo: "Pantanal Sul-Mato-Grossense (Fauna)",
    subtitulo: "Estudo da Fauna",
    duracao: "5 dias",
    descricao: "Observação de animais silvestres e ecossistemas aquáticos",
    image: "/card1.jpg",
    slug: "pantanal-sul-mato-grossense-fauna",
  },
  {
    id: 5,
    titulo: "Parque Nac. Chapada Diamantina (Geologia)",
    subtitulo: "Geografia e Geologia",
    duracao: "4 dias",
    descricao: "Formações rochosas, grutas e estudo do relevo brasileiro",
    image: "/card1.jpg",
    slug: "chapada-diamantina",
  },
];

export function getRoteiroBySlug(slug: string) {
  return roteiros.find((r) => r.slug === slug);
}
