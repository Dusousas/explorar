// app/src/data/roteiros.ts
export type Roteiro = {
  id: number;
  titulo: string;
  subtitulo: string; // resumo para cards e SEO
  localizacao: string;

  descricao: string; // intro forte (ideal para topo do detalhe)
  descricao1: string; // aprofundamento pedagógico
  descricao2: string; // experiência + diferenciais + fechamento

  image: string;
  slug: string;

  // ✅ NOVO
  categoria: string;
  publico: string[]; // Ex: ["Educação Infantil", "Fundamental I"]
};

export const roteiros: Roteiro[] = [
  // =========================
  // PERNOITES
  // =========================
  {
    id: 1,
    titulo: "Cidades Históricas",
    subtitulo:
      "Minas Gerais (MG) — um Estudo do Meio com história viva: barroco, centros históricos e o Brasil colonial em uma viagem segura, educativa e inesquecível.",
    localizacao: "Minas Gerais - MG",
    descricao:
      "As Cidades Históricas de Minas Gerais são o destino ideal para uma viagem escolar com pernoite que transforma conteúdo em vivência real. Aqui, o aluno não apenas estuda história: ele caminha por ruas e praças que guardam memórias do Brasil colonial, observa a arte barroca de perto e entende como economia, cultura e sociedade se organizaram em um período decisivo do país.",
    descricao1:
      "O roteiro foi pensado para unir patrimônio, cultura e educação com linguagem acessível e mediação adequada para o grupo. Igrejas, centros históricos e espaços culturais se tornam pontos de aprendizagem interdisciplinar, conectando história, arte, geografia, cidadania e leitura de território.",
    descricao2:
      "Além do repertório acadêmico, a experiência fortalece autonomia, convivência, organização do grupo e senso de pertencimento cultural. Com planejamento completo, logística organizada e acompanhamento, a escola ganha tranquilidade e previsibilidade do início ao fim — e os alunos levam lembranças que marcam para sempre.",
    image: "/card1.jpg",
    slug: "cidades-historicas-minas-gerais",
    categoria: "Pernoite",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 2,
    titulo: "Cananéia & Ilha do Cardoso",
    subtitulo:
      "Litoral Sul de SP — patrimônio, Mata Atlântica, manguezais e trilhas: um pernoite que une cultura, ciência e ecossistemas costeiros na prática.",
    localizacao: "Litoral Sul de São Paulo - SP",
    descricao:
      "Cananéia e a Ilha do Cardoso formam um roteiro completo para escolas que buscam Estudo do Meio com pernoite, natureza preservada e conteúdo significativo. Entre história e biodiversidade, os alunos vivenciam a relação entre cultura, território e meio ambiente com observação, experiências guiadas e aprendizagem ativa.",
    descricao1:
      "Em Cananéia, a turma explora o patrimônio histórico e cultural de uma das cidades mais antigas do Brasil, conectando identidade local e formação histórica. Na Ilha do Cardoso, o aprendizado acontece em contato direto com Mata Atlântica, manguezais e restingas — ambientes ricos para trabalhar ecologia, conservação e dinâmicas costeiras.",
    descricao2:
      "É um roteiro que amplia repertório científico e cultural, fortalece consciência ambiental e cria vínculo de turma com vivências reais. Com cronograma estruturado, condução segura e organização completa, a escola tem tranquilidade e os alunos vivem uma experiência memorável.",
    image: "/card1.jpg",
    slug: "cananeia-ilha-do-cardoso",
    categoria: "Pernoite",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 3,
    titulo: "Paranapiacaba & Santos",
    subtitulo:
      "Serra do Mar e Litoral Paulista — patrimônio ferroviário, Mata Atlântica, porto, urbanização e economia: um roteiro interdisciplinar e envolvente.",
    localizacao: "Serra do Mar e Litoral Paulista - SP",
    descricao:
      "Paranapiacaba e Santos unem patrimônio, natureza e história urbana em um roteiro que faz o aluno compreender o território como ele é: vivo, construído e cheio de relações. A experiência articula teoria e prática e transforma conceitos em vivência — de preservação ambiental a processos econômicos e culturais.",
    descricao1:
      "Em Paranapiacaba, a herança ferroviária e o cenário da Serra do Mar permitem trabalhar conservação do patrimônio, Mata Atlântica e impactos do desenvolvimento urbano. Em Santos, o porto, os casarões e os caminhos do café abrem discussões sobre economia, trabalho, urbanização e identidade cultural.",
    descricao2:
      "Com programação organizada e acompanhamento, os alunos aprendem com significado e a escola ganha previsibilidade e tranquilidade. Um Estudo do Meio forte para projetos interdisciplinares, com experiências reais que aumentam repertório e engajamento.",
    image: "/card1.jpg",
    slug: "paranapiacaba-santos",
    categoria: "Pernoite",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 4,
    titulo: "P.E.T.A.R — Parque Estadual Turístico do Alto Ribeira",
    subtitulo:
      "Iporanga (SP) — cavernas, rios e trilhas no Vale do Ribeira: imersão na Mata Atlântica com foco em preservação e consciência ambiental.",
    localizacao: "Iporanga - SP",
    descricao:
      "O PETAR é uma imersão inesquecível em uma das áreas de Mata Atlântica mais preservadas do Brasil. No Vale do Ribeira, os alunos vivem um Estudo do Meio que conecta natureza, ciência e responsabilidade ambiental — com trilhas, rios, cavernas e paisagens que transformam o aprendizado em algo concreto e memorável.",
    descricao1:
      "O roteiro estimula observação, curiosidade científica e leitura de ambiente: fauna, flora, recursos hídricos e dinâmica dos ecossistemas. A vivência é ideal para trabalhar sustentabilidade, patrimônio natural, conservação e uso responsável dos recursos de forma prática e envolvente.",
    descricao2:
      "Além do conteúdo ambiental, o PETAR fortalece senso de grupo, autonomia e respeito à natureza. Com planejamento, cronograma e condução segura, a escola tem tranquilidade e os alunos vivem uma experiência que realmente marca.",
    image: "/card1.jpg",
    slug: "petar-iporanga",
    categoria: "Pernoite",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 5,
    titulo: "Campos do Jordão",
    subtitulo:
      "Serra da Mantiqueira (SP) — clima de montanha, Mata Atlântica e cultura urbana: roteiro com natureza, arquitetura e aprendizado ao ar livre.",
    localizacao: "Vale do Paraíba - SP",
    descricao:
      "Campos do Jordão equilibra natureza, cultura e história em um cenário perfeito para viagens escolares com pernoite. A cidade oferece clima de montanha, paisagens de Mata Atlântica e pontos urbanos que estimulam observação e repertório — ideal para aprender fora da sala.",
    descricao1:
      "A arquitetura com influências europeias e o charme urbano favorecem temas como urbanismo, ocupação do território e cultura. Ao mesmo tempo, o ambiente de serra estimula o contato com natureza, leitura de paisagem e vivências pedagógicas ao ar livre.",
    descricao2:
      "Com organização, programação clara e acompanhamento, a escola ganha tranquilidade e os alunos vivem um roteiro envolvente e enriquecedor — com experiências que combinam aprendizado, convivência e memórias inesquecíveis.",
    image: "/card1.jpg",
    slug: "campos-do-jordao",
    categoria: "Pernoite",
    publico: ["Fundamental II", "Ensino Médio"],
  },

  // =========================
  // EDUCAÇÃO INFANTIL & FUNDAMENTAL I
  // =========================
  {
    id: 6,
    titulo: "Sítio Sassafraz",
    subtitulo:
      "Itupeva (SP) — vivência rural com animais, plantio e colheita, passeio de trator e oficina culinária: aprendizado prático e afetivo para crianças.",
    localizacao: "Itupeva - SP",
    descricao:
      "No Sítio Sassafraz, as crianças aprendem com o corpo e com os sentidos. É uma vivência rural que aproxima os alunos de animais da fazenda, do plantio e da colheita, estimulando curiosidade, cuidado e respeito pela natureza.",
    descricao1:
      "O passeio de trator e o contato com rios e nascentes criam oportunidades reais para falar sobre preservação ambiental, ciclos da natureza e alimentação. A proposta é conduzida com linguagem e dinâmica adequadas para a idade, tornando o aprendizado leve e significativo.",
    descricao2:
      "Para fechar com carinho e memória afetiva, as crianças participam de uma oficina culinária e preparam pão caseiro para levar para casa. Um roteiro encantador, educativo e perfeito para Estudo do Meio na infância.",
    image: "/card1.jpg",
    slug: "sitio-sassafraz",
    categoria: "Infantil & Fundamental I",
    publico: ["Educação Infantil", "Fundamental I"],
  },
  {
    id: 7,
    titulo: "Maria Fumaça",
    subtitulo:
      "Campinas (SP) — uma verdadeira viagem no tempo: locomotiva histórica, telégrafo e o primeiro telefone do Brasil para aprender história e tecnologia com encanto.",
    localizacao: "Campinas - SP",
    descricao:
      "A Maria Fumaça é mais do que um passeio: é uma aula viva sobre os meios de locomoção e a evolução da comunicação. As crianças entendem como funcionava a locomotiva e por que o trem foi tão importante para o desenvolvimento das cidades e da economia.",
    descricao1:
      "O roteiro também apresenta marcos como o telégrafo e o primeiro telefone do Brasil, conectando história e tecnologia de forma acessível. É um aprendizado que fica porque foi vivido: com observação, curiosidade e encantamento.",
    descricao2:
      "Com organização e condução segura, a turma aproveita cada etapa com tranquilidade. Uma experiência cultural e educativa que amplia repertório e cria memórias incríveis.",
    image: "/card1.jpg",
    slug: "maria-fumaca",
    categoria: "Infantil & Fundamental I",
    publico: ["Fundamental I"],
  },
  {
    id: 8,
    titulo: "Mata Santa Genebra",
    subtitulo:
      "Campinas (SP) — trilha ecológica, borboletário e biodiversidade: educação ambiental prática e encantadora para crianças.",
    localizacao: "Campinas - SP",
    descricao:
      "A Mata Santa Genebra é uma experiência ecológica e educativa que apresenta, na prática, a importância da fauna e da flora. Um roteiro ideal para escolas que querem trabalhar educação ambiental com vivência real e linguagem adequada para crianças.",
    descricao1:
      "A visita inclui trilha ecológica, borboletário e contato com conteúdos que ajudam a construir respeito pela natureza e entendimento sobre ecossistemas. A proposta é leve, organizada e muito envolvente.",
    descricao2:
      "A possibilidade de piquenique em meio à natureza torna tudo ainda mais especial, fortalecendo convivência e organização do grupo. Um passeio educativo, divertido e com impacto real no aprendizado.",
    image: "/card1.jpg",
    slug: "mata-santa-genebra",
    categoria: "Infantil & Fundamental I",
    publico: ["Educação Infantil", "Fundamental I"],
  },
  {
    id: 9,
    titulo: "Fazendinha Cheiro do Mato",
    subtitulo:
      "Itatiba (SP) — dia típico na roça com animais, trator e cultura do campo: vivência rural lúdica e educativa para aprender brincando.",
    localizacao: "Itatiba - SP",
    descricao:
      "A Fazendinha Cheiro do Mato oferece uma vivência lúdica e educativa no ambiente rural. As crianças convivem com animais, observam rotinas do campo e aprendem sobre cuidado, alimentação e respeito à natureza em um espaço acolhedor e seguro.",
    descricao1:
      "O roteiro inclui contato com animais do sítio (como galinhas, patos, cavalos e coelhos) e passeio de trator, estimulando curiosidade e participação. A vivência faz sentido para a idade e mantém a turma engajada.",
    descricao2:
      "Além disso, conhecer uma casa de pau a pique amplia repertório cultural e conecta história ao território. Um roteiro completo para aprender com alegria e experiência real.",
    image: "/card1.jpg",
    slug: "fazendinha-cheiro-do-mato",
    categoria: "Infantil & Fundamental I",
    publico: ["Educação Infantil", "Fundamental I"],
  },
  {
    id: 10,
    titulo: "Fazenda Ituáu — Terra de Gigantes",
    subtitulo:
      "Salto (SP) — alimentação saudável, estufas, minhocário, plantio e mini fazenda: aprendizado prático com teatro lúdico e experiências marcantes.",
    localizacao: "Salto - SP",
    descricao:
      "Na Fazenda Ituáu, as crianças aprendem sobre alimentação saudável, cultivo e natureza vivendo cada etapa. É um roteiro prático e envolvente, perfeito para Infantil e Fundamental I, com atividades que despertam curiosidade e participação.",
    descricao1:
      "A programação inclui visita às estufas, exploração do minhocário, plantio, mini fazenda e cuidado com animais. A proposta é organizada e conduzida com linguagem acessível, tornando o aprendizado significativo.",
    descricao2:
      "O toque especial fica por conta do teatro lúdico e criativo, que transforma conteúdo em experiência divertida. Um Estudo do Meio completo: educativo, seguro e inesquecível.",
    image: "/card1.jpg",
    slug: "fazenda-ituau-terra-de-gigantes",
    categoria: "Infantil & Fundamental I",
    publico: ["Educação Infantil", "Fundamental I"],
  },

  // =========================
  // FUNDAMENTAL I & FUNDAMENTAL II
  // =========================
  {
    id: 11,
    titulo: "Fazenda do Café",
    subtitulo:
      "Jundiaí (SP) — ciclo do café e história do Brasil em visita guiada por espaços reais do cultivo: experiência completa com jogo interativo.",
    localizacao: "Jundiaí - SP",
    descricao:
      "A Fazenda do Café transforma o ciclo do café em uma experiência completa, conectando história do Brasil, economia, trabalho e cultura. Os alunos entendem, na prática, por que o café foi tão importante para o desenvolvimento do país e como ele impactou cidades e sociedade.",
    descricao1:
      "A visita passa por casa sede, senzalas, casas dos colonos, Museu do Café e pelas etapas reais do cultivo: cafezal, viveiro, lavador, despolpador, terreiros, tulha e torrefação. Cada ponto amplia a compreensão do processo e do contexto histórico.",
    descricao2:
      "Para tornar tudo ainda mais envolvente, a experiência inclui jogo digital interativo que estimula participação e aprendizado. Um roteiro rico, organizado e excelente para projetos interdisciplinares.",
    image: "/card1.jpg",
    slug: "fazenda-do-cafe",
    categoria: "Fundamental I & II",
    publico: ["Fundamental I", "Fundamental II"],
  },
  {
    id: 12,
    titulo: "Serra do Japi",
    subtitulo:
      "Cabreúva (SP) — trilhas, biodiversidade e nascentes no “Castelo das Águas”: aula prática de biologia e geografia com consciência ambiental.",
    localizacao: "Cabreúva - SP",
    descricao:
      "A Serra do Japi é uma das áreas mais importantes de Mata Atlântica preservada no interior paulista. Conhecida como “Castelo das Águas”, abriga grande biodiversidade e inúmeras nascentes — um cenário perfeito para Estudo do Meio com propósito.",
    descricao1:
      "Os alunos participam de trilhas secas e molhadas e vivenciam conteúdos de biologia e geografia de forma prática e interdisciplinar: leitura de ambiente, preservação, recursos hídricos e biodiversidade.",
    descricao2:
      "Além do conteúdo ambiental, o roteiro abre espaço para conversas sobre ocupação do território e responsabilidade coletiva. Uma experiência educativa que fortalece consciência ambiental e cria memórias marcantes.",
    image: "/card1.jpg",
    slug: "serra-do-japi",
    categoria: "Fundamental I & II",
    publico: ["Fundamental I", "Fundamental II"],
  },
  {
    id: 13,
    titulo: "Fazenda Morro Pelado",
    subtitulo:
      "Águas de Lindóia (SP) — cavalo, trator, mirante, tirolesa, arco e flecha e arvorismo: dia completo ao ar livre com almoço típico no fogão a lenha.",
    localizacao: "Águas de Lindóia - SP",
    descricao:
      "A Fazenda Morro Pelado oferece um dia completo de lazer e contato com a natureza, ideal para integrar turma, estimular movimento e criar memórias. O roteiro combina diversão ao ar livre com vivência rural e atividades que engajam alunos do Fundamental I e II.",
    descricao1:
      "A programação inclui passeio a cavalo, passeio de trator, visita ao mirante, tirolesa, arco e flecha e arvorismo — tudo com organização para que cada etapa aconteça com tranquilidade e segurança.",
    descricao2:
      "O almoço típico de fazenda no fogão a lenha completa a experiência com aconchego e cultura. Um roteiro leve, alegre e inesquecível para escola, alunos e famílias.",
    image: "/card1.jpg",
    slug: "fazenda-morro-pelado",
    categoria: "Fundamental I & II",
    publico: ["Fundamental I", "Fundamental II"],
  },
  {
    id: 14,
    titulo: "Sítio do Sol — Cultura Indígena",
    subtitulo:
      "Cabreúva (SP) — vivência cultural com atividades, trilha e rodas de conversa: contato direto com indígenas e aprendizado sobre tradição e respeito.",
    localizacao: "Cabreúva - SP",
    descricao:
      "O Sítio do Sol proporciona uma vivência cultural rara e enriquecedora, em que os alunos aprendem sobre costumes, tradições e modos de vida de povos indígenas. É um roteiro ideal para escolas que buscam diversidade, cidadania e história viva.",
    descricao1:
      "A programação inclui atividades como arco e flecha, corrida da tora, rodas de conversa e trilha — com explicações acessíveis e conexão com conteúdos pedagógicos. O contato direto favorece empatia e valorização cultural.",
    descricao2:
      "A experiência conta ainda com almoço típico servido na palha de milho, criando um momento marcante e educativo. Um roteiro que amplia repertório e fortalece formação humana e crítica.",
    image: "/card1.jpg",
    slug: "sitio-do-sol-cultura-indigena",
    categoria: "Fundamental I & II",
    publico: ["Fundamental I", "Fundamental II"],
  },
  {
    id: 15,
    titulo: "Recanto São José",
    subtitulo:
      "Mogi Mirim (SP) — pedalinho, charrete, ordenha, trenzinho, piscina e trilha: dia completo na natureza com recreação e vivência rural.",
    localizacao: "Mogi Mirim - SP",
    descricao:
      "O Recanto São José é um roteiro de dia completo em meio à natureza, com atividades lúdicas e recreativas que promovem integração, bem-estar e aprendizado. Uma experiência que equilibra diversão e conteúdo com estrutura para receber escolas.",
    descricao1:
      "A programação inclui pedalinho, charrete, ordenha, trilha ecológica, passeio de trenzinho, piscina com toboágua, arvorismo, visita à horta e ao museu de objetos antigos — uma variedade de vivências que mantêm o grupo engajado.",
    descricao2:
      "Com acompanhamento e organização, a escola aproveita com segurança e fluidez. Um roteiro que entrega alegria, convivência e memórias inesquecíveis para a turma.",
    image: "/card1.jpg",
    slug: "recanto-sao-jose",
    categoria: "Fundamental I & II",
    publico: ["Fundamental I", "Fundamental II"],
  },

  // =========================
  // FUNDAMENTAL I & II (ANIMAIS / CIÊNCIA / AQUÁRIO)
  // =========================
  {
    id: 16,
    titulo: "Animália Park",
    subtitulo:
      "Cotia (SP) — biodiversidade, conservação e bem-estar animal: experiência educativa e interativa com lazer em parque indoor para escolas.",
    localizacao: "Cotia - SP",
    descricao:
      "O Animália Park aproxima os alunos do mundo animal e da biodiversidade com uma proposta educativa, interativa e acessível. A visita desperta curiosidade, promove conscientização e reforça conteúdos de ciências e meio ambiente de forma leve e marcante.",
    descricao1:
      "Os estudantes conhecem diferentes espécies e compreendem conceitos como conservação, cuidados e bem-estar animal. A experiência é conduzida para estimular observação, diálogo e conexão com o conteúdo escolar.",
    descricao2:
      "Além do aprendizado, o formato indoor oferece conforto e estrutura, tornando o roteiro ideal para grupos escolares. Um passeio completo, com alto engajamento e ótima aceitação pelas turmas.",
    image: "/card1.jpg",
    slug: "animalia-park",
    categoria: "Natureza & Animais",
    publico: ["Fundamental I", "Fundamental II"],
  },
  {
    id: 17,
    titulo: "MAAS — Museu Aberto de Astronomia",
    subtitulo:
      "Campinas (SP) — ciência e astronomia com exposições e experiências: roteiro perfeito para projetos interdisciplinares e aprendizado envolvente.",
    localizacao: "Campinas - SP",
    descricao:
      "O MAAS é um dos maiores complexos astronômicos do Brasil e oferece uma visita educativa que aproxima os alunos de ciência, tecnologia e astronomia. É um roteiro que aumenta repertório e transforma temas abstratos em experiência concreta.",
    descricao1:
      "Com ambientes, equipamentos e espaços com exposições, os estudantes entram em contato com conteúdos do sistema solar, história do planeta e ciência de forma acessível e instigante. Ideal para projetos e conteúdos interdisciplinares.",
    descricao2:
      "A vivência cria encantamento e interesse genuíno, reforçando o Estudo do Meio como extensão real do aprendizado. Um roteiro envolvente para turmas do Fundamental e Médio.",
    image: "/card1.jpg",
    slug: "maas-astronomia",
    categoria: "Ciência & Tecnologia",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 18,
    titulo: "Aquário de São Paulo",
    subtitulo:
      "São Paulo (SP) — biodiversidade global e ecossistemas em visita guiada: aprendizado científico imersivo sobre preservação e sustentabilidade.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Aquário de São Paulo proporciona uma experiência imersiva sobre biodiversidade global. Com visita orientada, os alunos exploram ecossistemas complexos e compreendem, de forma visual e prática, a importância da preservação ambiental e da sustentabilidade.",
    descricao1:
      "O roteiro é excelente para consolidar conteúdos de ciências, biologia e geografia, conectando o que é visto em sala ao mundo real. O ambiente controlado favorece organização, segurança e aproveitamento pedagógico.",
    descricao2:
      "Mais do que um passeio, é um mergulho no conhecimento — capaz de gerar encantamento e ampliar consciência ambiental. Um roteiro de alto impacto educativo e ótima aceitação pelas turmas.",
    image: "/card1.jpg",
    slug: "aquario-de-sao-paulo",
    categoria: "Natureza & Animais",
    publico: ["Fundamental I", "Fundamental II", "Ensino Médio"],
  },
  {
    id: 19,
    titulo: "Pet Zoo",
    subtitulo:
      "Cotia (SP) — contato com animais domésticos e vivência rural: educação, cuidado e respeito com atividades práticas e aprendizagem significativa.",
    localizacao: "Cotia - SP",
    descricao:
      "A Mini Fazendinha Pet Zoo oferece uma experiência educativa com contato direto com animais domésticos, fortalecendo valores como cuidado, respeito, empatia e responsabilidade. Ideal para escolas que querem ensinar de forma prática e afetiva.",
    descricao1:
      "A vivência conecta conteúdo a atividades do cotidiano rural, com acompanhamento e propostas pedagógicas. Os alunos aprendem sobre alimentação, cuidados e relações sustentáveis com o ambiente.",
    descricao2:
      "O roteiro também estimula interação e organização do grupo, promovendo aprendizado significativo com segurança e condução adequada para crianças e adolescentes.",
    image: "/card1.jpg",
    slug: "pet-zoo",
    categoria: "Natureza & Animais",
    publico: ["Educação Infantil", "Fundamental I", "Fundamental II"],
  },
  {
    id: 20,
    titulo: "Sitiolândia Eco Park",
    subtitulo:
      "Caieiras (SP) — trilhas, contato com animais, tirolesa e recreação: consciência ambiental com lazer e aprendizagem em um dia completo.",
    localizacao: "Caieiras - SP",
    descricao:
      "A Sitiolândia Eco Park combina natureza, recreação e educação ambiental em um roteiro completo e divertido. Uma escolha excelente para trabalhar preservação, respeito ao meio ambiente e convivência em grupo com estrutura para receber escolas.",
    descricao1:
      "A programação inclui trilhas ecológicas, contato com animais, atividades recreativas, teatros, tirolesa e aprendizado sobre conservação ambiental, sempre com condução adequada para a turma e organização por etapas.",
    descricao2:
      "O resultado é uma experiência que equilibra lazer e conteúdo, mantendo os alunos engajados enquanto a escola tem tranquilidade. Um Estudo do Meio leve, rico e inesquecível.",
    image: "/card1.jpg",
    slug: "sitiolandia-eco-park",
    categoria: "Natureza & Aventura",
    publico: ["Fundamental I", "Fundamental II"],
  },

  // =========================
  // MUSEUS (FUNDAMENTAL II & ENSINO MÉDIO)
  // =========================
  {
    id: 21,
    titulo: "Museu Catavento",
    subtitulo:
      "São Paulo (SP) — ciência e tecnologia com experiências interativas: roteiro com alto engajamento para Fundamental II e Ensino Médio.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu Catavento é um dos roteiros mais procurados por escolas que desejam unir ciência, tecnologia e aprendizado prático. As exposições interativas aumentam engajamento e ajudam o aluno a compreender conceitos complexos de forma simples, visual e participativa.",
    descricao1:
      "É um roteiro excelente para trabalhar física, biologia, astronomia, energia, sustentabilidade e inovação, conectando conteúdo escolar com experiências reais. A visita permite que o aluno aprenda fazendo — e isso melhora retenção e interesse.",
    descricao2:
      "Com planejamento e organização, a escola tem previsibilidade e a turma aproveita cada espaço com tranquilidade. Um passeio educativo com alto impacto e ótima aceitação.",
    image: "/card1.jpg",
    slug: "museu-catavento",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 22,
    titulo: "Museu do Ipiranga",
    subtitulo:
      "São Paulo (SP) — história, cultura e identidade nacional: roteiro essencial para projetos pedagógicos e aprofundamento curricular.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu do Ipiranga é um roteiro essencial para aprofundar história do Brasil, cultura e construção de identidade nacional. A visita amplia repertório e abre espaço para debates sobre memória, cidadania e interpretações históricas.",
    descricao1:
      "Com mediação e roteirização adequada, os alunos conseguem conectar acervo e narrativa histórica a conteúdos escolares, tornando o aprendizado mais claro e significativo. É excelente para projetos interdisciplinares e avaliações formativas.",
    descricao2:
      "Uma experiência cultural de alto valor pedagógico, ideal para Fundamental II e Ensino Médio — com organização para que a escola aproveite com tranquilidade do começo ao fim.",
    image: "/card1.jpg",
    slug: "museu-do-ipiranga",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 23,
    titulo: "Museu da Língua Portuguesa",
    subtitulo:
      "São Paulo (SP) — linguagem, cultura e identidade em exposições imersivas: um roteiro moderno e envolvente para estudantes.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu da Língua Portuguesa transforma linguagem em experiência. Em exposições imersivas, os alunos percebem como a língua constrói identidade, cultura e pertencimento — com uma visita dinâmica, atual e extremamente envolvente.",
    descricao1:
      "É um roteiro excelente para trabalhar comunicação, literatura, história e diversidade cultural, conectando conteúdo escolar com vivências interativas. A visita estimula leitura crítica e amplia repertório de forma natural.",
    descricao2:
      "Uma experiência que engaja e inspira, perfeita para projetos pedagógicos do Fundamental II e Ensino Médio com foco em linguagem e cultura.",
    image: "/card1.jpg",
    slug: "museu-da-lingua-portuguesa",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 24,
    titulo: "Museu do Futebol",
    subtitulo:
      "São Paulo (SP) — esporte como cultura e história: roteiro interdisciplinar com alto engajamento e narrativa contemporânea para estudantes.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu do Futebol mostra como o esporte ajuda a contar a história do Brasil. É um roteiro que conecta cultura, sociedade, mídia, identidade e memória coletiva de um jeito envolvente e acessível — com grande aceitação entre os alunos.",
    descricao1:
      "A visita permite discutir temas como diversidade, transformações sociais, representatividade e cultura popular, ampliando repertório e promovendo reflexão crítica. Ideal para projetos interdisciplinares.",
    descricao2:
      "Um passeio dinâmico, imersivo e educativo para turmas do Fundamental II e Ensino Médio, com organização para que a experiência seja fluida e marcante.",
    image: "/card1.jpg",
    slug: "museu-do-futebol",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 25,
    titulo: "MASP — Museu de Arte de São Paulo",
    subtitulo:
      "São Paulo (SP) — arte, cultura e leitura crítica de mundo: roteiro de alto valor pedagógico para ampliar repertório e interpretação.",
    localizacao: "São Paulo - SP",
    descricao:
      "O MASP é uma escolha de excelência para escolas que desejam ampliar repertório cultural e desenvolver leitura crítica através da arte. A experiência favorece interpretação, sensibilidade e conexões profundas com história e sociedade.",
    descricao1:
      "Com visita orientada, os alunos relacionam obras, contextos históricos e expressões culturais, tornando a arte acessível e significativa. Ótimo para projetos pedagógicos, redações e atividades interdisciplinares.",
    descricao2:
      "Uma vivência inspiradora que amplia o olhar e fortalece o vínculo com cultura e conhecimento, com organização e tranquilidade para a escola.",
    image: "/card1.jpg",
    slug: "masp",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 26,
    titulo: "Pinacoteca do Estado",
    subtitulo:
      "São Paulo (SP) — arte brasileira e memória cultural: roteiro ideal para repertório, interpretação e projetos interdisciplinares.",
    localizacao: "São Paulo - SP",
    descricao:
      "A Pinacoteca do Estado oferece uma experiência cultural completa, com acervo importante e excelente estrutura para visitas escolares. Ideal para trabalhar artes, história, identidade e leitura de imagens com profundidade.",
    descricao1:
      "A visita pode ser planejada para conectar temas pedagógicos com obras e exposições, estimulando análise, interpretação e repertório. É especialmente valiosa para projetos escolares e construção de argumentação.",
    descricao2:
      "Uma vivência rica e bem aceita por estudantes do Fundamental II e Ensino Médio, com organização para que a escola aproveite com tranquilidade.",
    image: "/card1.jpg",
    slug: "pinacoteca-do-estado",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 27,
    titulo: "Museu da Imigração",
    subtitulo:
      "São Paulo (SP) — diversidade, história social e formação do Brasil: roteiro forte para geografia, história e sociologia com aprendizado significativo.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu da Imigração é um roteiro potente para trabalhar diversidade cultural, formação do Brasil e história social. Os alunos compreendem processos migratórios, identidade e transformações sociais com base em acervos e narrativas bem estruturadas.",
    descricao1:
      "É ideal para história, geografia e sociologia, além de projetos pedagógicos sobre cidadania, pertencimento e multiculturalismo. O conteúdo se conecta facilmente à realidade do aluno e ao Brasil contemporâneo.",
    descricao2:
      "Uma visita que amplia repertório com impacto real, excelente para Fundamental II e Ensino Médio — unindo conhecimento e experiência cultural.",
    image: "/card1.jpg",
    slug: "museu-da-imigracao",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 28,
    titulo: "Museu Afro Brasil",
    subtitulo:
      "São Paulo (SP) — cultura afro-brasileira, história e identidade: roteiro essencial para diversidade, repertório e consciência histórica.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Museu Afro Brasil é uma visita essencial para ampliar repertório cultural e compreender a influência afro-brasileira na história, na arte e na construção da identidade do país. Um roteiro que fortalece reflexão, respeito e consciência histórica.",
    descricao1:
      "Com acervo expressivo, o museu permite trabalhar diversidade, cultura, memória e sociedade de forma interdisciplinar, trazendo profundidade e significado ao conteúdo escolar.",
    descricao2:
      "Uma vivência enriquecedora para Fundamental II e Ensino Médio, contribuindo para formação cidadã e crítica de maneira envolvente e bem estruturada.",
    image: "/card1.jpg",
    slug: "museu-afro-brasil",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
  {
    id: 29,
    titulo: "Instituto Butantan & Museu de Anatomia (USP)",
    subtitulo:
      "São Paulo (SP) — ciência, saúde e biologia com vivência prática: roteiro ideal para projetos científicos, aprofundamento curricular e orientação vocacional.",
    localizacao: "São Paulo - SP",
    descricao:
      "O Instituto Butantan e o Museu de Anatomia (USP) compõem um roteiro perfeito para escolas que desejam fortalecer conteúdos de ciências, biologia e saúde com uma experiência concreta e muito rica em aprendizado.",
    descricao1:
      "A visita permite relacionar teoria e prática, compreender melhor temas do corpo humano, pesquisa científica e saúde pública, ampliando repertório e interesse por ciência. Excelente para projetos, feiras e aprofundamento curricular.",
    descricao2:
      "Com roteirização e organização adequadas, é uma experiência segura e envolvente para Fundamental II e Ensino Médio, com grande valor pedagógico e potencial de inspirar escolhas acadêmicas.",
    image: "/card1.jpg",
    slug: "instituto-butantan-museu-anatomia-usp",
    categoria: "Museus",
    publico: ["Fundamental II", "Ensino Médio"],
  },
];

export function getRoteiroBySlug(slug: string) {
  return roteiros.find((r) => r.slug === slug);
}
