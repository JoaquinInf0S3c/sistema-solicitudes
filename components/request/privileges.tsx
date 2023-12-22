"use client";
import { CheckboxGroup, Checkbox, Input, Button } from "@nextui-org/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Privileges() {
  const [privileges, setPrivileges] = useState([
    "privilegio-1",
    "privilegio-2",
    "privilegio-3",
    "privilegio-4",
    "privilegio-5",
    "privilegio-6",
    "privilegio-7",
    "privilegio-8",
  ]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    /* const result = await fetch("localhost:3000/api/requests", {
      method: "POST",
      body: JSON.stringify({
        requestType,
        reason,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();
    console.log(json); */

    const json = {
      privileges: JSON.stringify(privileges),
    }
    console.log(json);
    redirect("/ingresar-solicitud/privilegios/");
  };

    
  return (
    <div className="h-[415px] w-[1024px] grid grid-cols-2 gap-4 rounded-md mix-blend-soft-light shadow-2xl">
      <CheckboxGroup
        color="primary"
        value={privileges}
        onValueChange={setPrivileges}
      >
        <Checkbox value="privilegio-1">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 1"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-2">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 2"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-3">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 3"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-4">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 4"
            className="w-[391px] h-16"
          />
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup
        color="primary"
        value={privileges}
        onValueChange={setPrivileges}
      >
        <Checkbox value="privilegio-5">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 5"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-6">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 6"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-7">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 7"
            className="w-[391px] h-16"
          />
        </Checkbox>
        <Checkbox value="privilegio-8">
          <Input
            isReadOnly
            radius="full"
            placeholder="Privilegio 8"
            className="w-[391px] h-16"
          />
        </Checkbox>
      </CheckboxGroup>
      <Link href="/ingresar-solicitud/privilegios/resumen">
        <Button onClick={handleSubmit} className="bg-sky-200 w-[122px] h-11">Siguiente</Button>
      </Link>
    </div>
  );
}
