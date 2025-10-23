import { notFound } from "next/navigation";
import Image from "next/image";
import { getRoteiroBySlug, roteiros } from "@/app/src/data/roteiros";

type Params = { slug: string };

// SSG: gera as páginas estáticas no build
export async function generateStaticParams() {
  return roteiros.map((r) => ({ slug: r.slug }));
}

// ✅ Agora aguardando params (Next 15)
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const r = getRoteiroBySlug(slug);
  if (!r) return {};

  return {
    title: `${r.titulo} — Roteiro`,
    description: r.descricao,
    openGraph: {
      title: `${r.titulo} — Roteiro`,
      description: r.descricao,
      images: [{ url: r.image }],
    },
  };
}

// ✅ Também aqui: aguarde params antes de usar
export default async function RoteiroPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const roteiro = getRoteiroBySlug(slug);
  if (!roteiro) return notFound();

  return (
    <main className="py-20">
      <div className="maxW">
        <p className="text-azulP text-sm font-semibold uppercase tracking-wide">
          {roteiro.subtitulo} • {roteiro.duracao}
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-verdeP mt-3">
          {roteiro.titulo}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[16/10]">
            <Image
              src={roteiro.image}
              alt={roteiro.titulo}
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-azulP">
              Sobre o roteiro
            </h2>
            <p className="leading-relaxed text-gray-700">{roteiro.descricao}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
