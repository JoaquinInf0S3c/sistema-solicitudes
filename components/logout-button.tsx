"use client";
import { Button } from "@nextui-org/react";
import { Power } from "@geist-ui/icons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        signOut({
          redirect: false,
          callbackUrl: "http://localhost:3000/api/auth/signout",
        });
        router.push("/");
      }}
      color="danger"
      type="submit"
      variant="solid"
      endContent={<Power />}
      className="absolute top-0 end-0 m-5"
    >
      Cerrar sesión
    </Button>
  );
}
