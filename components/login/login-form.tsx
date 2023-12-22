"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      console.log(result.error);
    } else {
      router.push("/ingresar-solicitud");
    }
  }


  return (
    <form onSubmit={handleLogin} className="h-full">
      <div className="flex flex-col justify-center items-center h-full gap-10 mix-blend-soft-light rounded-[30px] shadow">
        <div className="w-[217px] h-[118px] text-[64px] font-extrabold text-white leading-[50px]">
          Login
        </div>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Ingrese su correo"
          value={email}
          onValueChange={setEmail}
          required
          className="w-[390px] h-[70px]"
        />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onValueChange={setPassword}
          required
          className="w-[390px] h-[70px]"
        />
        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button
      type="submit"
      variant="solid"
      color="primary"
      className="w-[109] h-8"
    >
      Iniciar sesión
    </Button>
  );
}
