import { notFound } from "next/navigation";
import Image from "next/image";
import { getRoteiroBySlug, roteiros } from "@/app/src/data/roteiros";
import Galery from "@/components/subc/Galery";

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
    <main className="py-20 bg-gray-100">
      <div className="maxW">
        <p className=" text-sm text-verdeP font-semibold uppercase tracking-wide text-center lg:text-left">
          {roteiro.localizacao}
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-azulP mt-3 tracking-wider  text-center lg:text-left">
          {roteiro.titulo}
        </h1>

        <article className="flex flex-col justify-center items-center lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <img
              src={roteiro.image}
              alt={roteiro.titulo}
              className="object-cover rounded-3xl mt-8 lg:w-[600px]"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-azulP  text-center mt-10 lg:text-left lg:mt-0">
              Sobre o roteiro
            </h2>
            <p className="leading-relaxed text-gray-700">{roteiro.descricao}</p>
            <p className="leading-relaxed text-gray-700 mt-2">
              {roteiro.descricao1}
            </p>
            <p className="leading-relaxed text-gray-700 mt-2">
              {roteiro.descricao2}
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                className="font-aleo bg-azulP text-sm text-white py-4 uppercase tracking-wider px-4 rounded"
                href=""
              >
                Agendar
              </a>
            </div>
          </div>
        </article>

        <article className="mt-20">
          {/* GALERIA */}
          <h1 className="text-3xl lg:text-5xl font-bold text-azulP text-center mt-3 tracking-wider">
            Galeria de Expedições
          </h1>
          <p className="leading-relaxed text-gray-700 text-center mt-2">Explore os registros das nossas expedições e sinta a energia de cada destino.</p>
        <Galery />
        </article>
      </div>
    </main>
  );
}
