import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen w-screen bg-[#182052]">
      {" "}
      {/* Añadir clase relativa y tamaño */}
      {/* Imagen de fondo */}
      <Image
        src="/muni.jpg"
        quality={100}
        fill // Cambiado a fill para cubrir el fondo
        alt="Municipalidad"
        className="bg-cover absolute z-0 opacity-[.13]" // Usar bg-cover y z-index 0
      />
      {/* Contenido sobre la imagen de fondo */}
      <div className="relative z-10 h-full w-full">
        {" "}
        {/* Añadir z-index para estar sobre el fondo */}
        <div className="absolute p-5 h-full w-full">
          {" "}
          {/* Posicionar logo */}
          <Image
            src="/logo_blanco.png"
            width={101}
            height={101}
            quality={100}
            alt="Logo"
          />
        </div>
        {children}
      </div>
    </main>
  );
}
