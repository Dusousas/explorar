import Form from "./subc/Form";

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="maxW">
          <h4 className="text-center text-verdeP text-2xl lg:text-3xl">
            Dúvidas?
          </h4>
          <h2 className="text-center text-4xl lg:text-5xl mt-4 text-azulP">
            Entre em contato
          </h2>
          <Form />

          <div>
            <iframe
            className="rounded-2xl mt-15 mx-auto shadow-xl w-full lg:w-[900px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235232.17558156198!2d-47.1961862179674!3d-22.894820392887013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f6a2552649%3A0x7475001c58043536!2sCampinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1761255180388!5m2!1spt-BR!2sbr"
        
              height="350"

              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
