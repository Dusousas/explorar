"use client";

export default function Footer() {
  const EMAIL =
    process.env.NEXT_PUBLIC_SITE_EMAIL?.trim() || "contato@seuemail.com";

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${encodeURIComponent("Contato - Explorar Viagens")}&body=${encodeURIComponent(
    "Olá, gostaria de informações sobre os roteiros."
  )}`;

  return (
    <>
      <section className="py-6">
        <div className="maxW f flex items-center justify-center">
          <a className="text-azulP text-2xl font-grand-hotel" href="/">
            <img className="w-[140px]" src="/logo-explorar1.png" alt="Explorar Viagens" />
          </a>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <a href="https://instagram.com/explorar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="w-[24px]" src="/icons/instagram.png" alt="Instagram" />
          </a>

          <a href="https://facebook.com/explorar" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img className="w-[24px]" src="/icons/facebook.png" alt="Facebook" />
          </a>

          {/* Gmail Web com 'Para:' preenchido */}
          <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" aria-label="Enviar e-mail via Gmail">
            <img className="w-[24px]" src="/icons/gmail.png" alt="Enviar e-mail via Gmail" />
          </a>

          {/* Se preferir mailto genérico, troque o <a> acima por este:
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Contato - Explorar Viagens")}`} aria-label="Enviar e-mail">
            <img className="w-[24px]" src="/icons/gmail.png" alt="Enviar e-mail" />
          </a>
          */}
        </div>
      </section>

      <section className="py-6 bg-azulP border-t border-white">
        <div className="maxW">
          <p className="text-center text-sm text-white">
            Explorar Viagens - Todos os direitos reservados
          </p>
        </div>
      </section>
    </>
  );
}
