"use client";

import { RequestTypeField, ReasonField } from "@/lib/definitions";
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Button,
} from "@nextui-org/react";
import { UploadCloud } from "@geist-ui/icons";
import Link from "next/link";
import { useState, Key } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function RequestForm({
  requestTypes,
  reasons,
}: {
  requestTypes: RequestTypeField[];
  reasons: ReasonField[];
}) {
  const requests = requestTypes.map((requestType) => {
    return {
      label: requestType.name,
      value: requestType.id,
    };
  });

  const reasonsList = reasons.map((reason) => {
    return {
      label: reason.name,
      value: reason.id,
    };
  });
  const { data: session } = useSession();
  const router = useRouter();

  const [requestType, setRequestType] = useState<string>("");
  const [selectedKey, setSelectedKey] = useState<Key>(
    "Inhabilitación de Usuario"
  );
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rut, setRut] = useState("");
  const [position, setPosition] = useState("");

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
    if (!result?.ok) {
      console.log(result);
    } else {
      router.push("/ingresar-solicitud/privilegios");
    } */
    const body = {
      session: session,
      requestType: requestType,
      reason: reason,
      email: email,
      name: name,
      lastName: lastName,
      rut: rut,
      position: position,
    };
    console.log(body);
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text text-white text-center mb-6">
        {" "}
        Solicitudes{" "}
      </h1>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center basis-1/2">
          <div className="flex flex-col h-[535px] w-[577px] items-center justify-center rounded-md mix-blend-soft-light shadow-2xl gap-6">
            <Autocomplete
              defaultItems={requests}
              variant="faded"
              label="TIPO DE SOLICITUD"
              placeholder="Ingrese tipo de solicitud"
              radius="full"
              isRequired
              className="max-w-sm"
              onInputChange={setRequestType}
            >
              {(requestType) => (
                <AutocompleteItem key={requestType.value}>
                  {requestType.label}
                </AutocompleteItem>
              )}
            </Autocomplete>

            <Autocomplete
              defaultItems={reasonsList}
              variant="faded"
              label="MOTIVO"
              placeholder="Ingrese motivo"
              radius="full"
              isRequired
              className="max-w-sm"
              onInputChange={setReason}
            >
              {(reason) => (
                <AutocompleteItem key={reason.value}>
                  {reason.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <Input
              label="ARCHIVO"
              endContent={<UploadCloud />}
              radius="full"
              className="max-w-sm"
            />
            <Input
              label="CORREO DE NOTIFICACIÓN"
              placeholder="XXXXX@municoquimbo.cl"
              radius="full"
              isRequired
              className="max-w-sm"
              type="email"
              value={email}
              onValueChange={setEmail}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center basis-1/2 h-[535px] w-[577px] rounded-md mix-blend-soft-light shadow-2xl gap-6">
          <Input
            label="Nombre funcionario"
            placeholder="Ingrese nombre"
            radius="full"
            isRequired
            className="max-w-sm"
            value={name}
            onValueChange={setName}
          />
          <Input
            label="Apellidos funcionario"
            placeholder="Ingrese apellidos"
            radius="full"
            isRequired
            className="max-w-sm"
            value={lastName}
            onValueChange={setLastName}
          />
          <Input
            label="Rut funcionario"
            placeholder="Ingrese rut"
            radius="full"
            isRequired
            className="max-w-sm"
            value={rut}
            onValueChange={setRut}
          />
          <Input
            label="Cargo funcionario"
            placeholder="Ingrese cargo"
            radius="full"
            isRequired
            className="max-w-sm"
            value={position}
            onValueChange={setPosition}
          />
        </div>
      </div>
      <div className="flex flex-row justify-end items-center w-full p-10">
        <Link href="/ingresar-solicitud/privilegios">
          <Button type="submit" className="bg-sky-200 w-[122px] h-11">
            Siguiente
          </Button>
        </Link>
      </div>
    </form>
  );
}
