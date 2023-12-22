import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Resume() {
  return (
    <div>
      <h1 className="text-white">Resume</h1>
      <Link href="/ingresar-solicitud/privilegios">
        <Button className="bg-sky-200 w-[122px] h-11">Volver</Button>
      </Link>
      <Link href="/ingresar-solicitud">
        <Button className="bg-sky-200 w-[122px] h-11">Enviar</Button>
      </Link>
    </div>
  );
}
