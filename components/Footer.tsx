export default function Footer() {
  return (
    <>
      <section className=" py-6">
        <div className="maxW f flex items-center justify-center">
          <a className="text-azulP text-2xl font-grand-hotel" href="/">
            <img className="w-[140px]" src="/logo-explorar1.png" alt="" />
          </a>
        </div>
<div className="flex gap-4 justify-center mt-4">
  <a href=""><img className="w-[24px]" src="/icons/instagram.png" alt="Instagram" /></a>
  <a href=""><img className="w-[24px]" src="/icons/facebook.png" alt="Instagram" /></a>

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
