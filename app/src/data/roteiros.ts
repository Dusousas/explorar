// app/src/data/roteiros.ts
export type Roteiro = {
  id: number;
  titulo: string;
  subtitulo: string;
  localizacao: string;
  descricao: string;
  descricao1: string;
  descricao2: string;
  image: string;
  slug: string;
};

export const roteiros: Roteiro[] = [
  {
    id: 1,
    titulo: "Serra da Mantiqueira",
    subtitulo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    localizacao: "Minas Gerais",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    image: "/card1.jpg",
    slug: "serra-da-mantiqueira",
  },
    {
    id: 2,
    titulo: "São Paulo City Tour",
    subtitulo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    localizacao: "São Paulo",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    image: "/card1.jpg",
    slug: "serra-da-mantiqueira",
  },

    {
    id: 3,
    titulo: "Brotas",
    subtitulo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    localizacao: "São Paulo",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    descricao2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    image: "/card1.jpg",
    slug: "serra-da-mantiqueira",
  },

];

export function getRoteiroBySlug(slug: string) {
  return roteiros.find((r) => r.slug === slug);
}
