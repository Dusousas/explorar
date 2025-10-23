import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-white py-6">
        <div className="maxW f flex items-center justify-between">
          <a className="text-azulP text-2xl font-grand-hotel" href="/">Explorar Viagens</a>
        <div>
          <Navbar />
        </div>
        </div>
      </header>
    </>
  );
}
