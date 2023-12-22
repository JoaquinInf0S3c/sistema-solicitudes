import { RequestSchema } from "./schemas";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

const CreateRequest = RequestSchema.omit({ state: true });

export async function createRequest(formData: FormData) {
  const validatedFields = CreateRequest.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Faltan datos, No se pudo enviar la solicitud",
    };
  }

  try {
    await fetch("/api/requests", {
      method: "POST",
      body: JSON.stringify(validatedFields),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return { message: "No se pudo enviar la solicitud" };
  }

  redirect("/ingresar-solicitud/privilegios");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
    redirect("/ingresar-solicitud");
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
