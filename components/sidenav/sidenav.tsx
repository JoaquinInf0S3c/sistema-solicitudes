import { signOut } from "next-auth/react";
import NavLinks from "./nav-links";
import { Button } from "@nextui-org/react";
import { Power } from "@geist-ui/icons";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button
            color="danger"
            type="submit"
            variant="ghost"
            endContent={<Power />}
            fullWidth
          >
            Cerrar sesión
          </Button>
        </form>
      </div>
    </div>
  );
}
