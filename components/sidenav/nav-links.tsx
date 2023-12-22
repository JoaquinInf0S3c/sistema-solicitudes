"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Home, File, Users, BarChart2 } from "@geist-ui/icons";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    href: "/dashboard",
    icon: <Home />,
  },
  {
    name: "Solicitudes",
    href: "/dashboard/solicitudes",
    icon: <File />,
  },
  {
    name: "Usuarios",
    href: "/dashboard/usuarios",
    icon: <Users />,
  },
  {
    name: "Estadísticas",
    href: "/dashboard/estadisticas",
    icon: <BarChart2 />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return [
          <Button
            key={link.name}
            href={link.href}
            endContent={link.icon}
            as={Link}
            color="primary"
            variant={pathname === link.href ? "solid" : "light"}
          >
            {link.name}
          </Button>,
        ];
      })}
    </>
  );
}
