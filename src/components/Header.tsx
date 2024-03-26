import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <Image
            src="/logo.svg"
            alt="Logotipo de Inphonity"
            width={156.13}
            height={27.01}
            priority
          />
        </div>
        <div></div>
      </nav>
    </header>
  );
}
