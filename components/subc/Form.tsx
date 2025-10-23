import React from "react";

export default function Form() {
  return (
    <>
      <form className="lg:w-1/2 mx-auto mt-20" action="">
        <div className="flex gap-6">
          <input
            placeholder="Nome..."
            className="text-black text-sm p-3 rounded-xl w-full bg-[#FFF8EF] outline-0"
            type="text"
          />
          <input
            placeholder="Sobrenome..."
            className="text-black text-sm p-3 rounded-xl w-full bg-[#FFF8EF] outline-0"
            type="email"
          />
        </div>
        <div className="flex gap-6 mt-6">
          <input
            placeholder="Telefone..."
            className="text-black text-sm p-3 rounded-xl w-full bg-[#FFF8EF] outline-0"
            type="text"
          />
          <input
            placeholder="E-mail..."
            className="text-black text-sm p-3 rounded-xl w-full bg-[#FFF8EF] outline-0"
            type="email"
          />
        </div>
        <textarea
          name=""
          id=""
          className="text-black text-sm p-3 resize-none mt-6 rounded-xl w-full bg-[#FFF8EF] outline-0"
          placeholder="Mensagem..."
          rows={4}
        ></textarea>

        <div className="mt-4 flex justify-center">
          <a className="bg-azulP uppercase font-aleo px-6 py-3 rounded-xl tracking-wider" href="">Enviar</a>
        </div>
      </form>
    </>
  );
}
