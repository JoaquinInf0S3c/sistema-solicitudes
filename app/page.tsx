import Login from "@/components/login/login";
import Image from "next/image";

export default function HomePage() {
  return (
    /* TODO: Agregar el color correcto */
    <main className="relative h-screen w-screen bg-[#182052]">
      {" "}
      {/* Añadir clase relativa y tamaño */}
      {/* Imagen de fondo */}
      <Image
        src="/muni.jpg"
        quality={100}
        fill // Cambiado a fill para cubrir el fondo
        alt="Municipalidad"
        className="bg-cover absolute z-0 opacity-40" // Usar object-cover y z-index 0
      />
      {/* Contenido sobre la imagen de fondo */}
      <div className="relative z-10 h-full w-full">
        {" "}
        {/* Añadir z-index para estar sobre el fondo */}
        <div className="absolute p-5">
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
        <div className="flex flex-row justify-evenly h-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-[64px] font-bold text-white mb-4">Sistema de Gestión<br></br> de Solicitudes</h1>
            <p className="text-xl text-white mb-4">
              Departamento de Gestión de Sistemas y TICs
            </p>
          </div>

          <div className="flex items-center">
            <Login />
          </div>
        </div>
      </div>
    </main>
  );
}
