import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-white py-3">
        <div className="maxW f flex items-center justify-between">
          <a className="text-azulP text-2xl font-grand-hotel" href="/"><img className="w-[140px]" src="/logo-explorar1.png" alt="" /></a>
        <div>
          <Navbar />
        </div>
        </div>
      </header>
    </>
  );
}
