"use client";

import { useState, useMemo, Key } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  User,
  Chip,
  ChipProps,
} from "@nextui-org/react";
import { RequestField } from "@/lib/definitions";

export default function RequestTable({
  requests,
}: {
  requests: RequestField[];
}) {
  const statusColorMap: Record<string, ChipProps["color"]> = {
    aprobado: "success",
    denegado: "danger",
    pendiente: "warning",
  };
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(requests.length / rowsPerPage);

  const filteredItems = requests.map((request) => {
    return {
      id: request.id,
      userName: request.userName,
      requestType: request.requestTypeName,
      email: request.email,
      state: request.state,
    };
  });

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const renderCell = (item: any, columnKey: Key) => {
    const value = getKeyValue(item, columnKey);

    switch (columnKey) {
      case "user":
        return (
          <User name={value} description={value}>
            {value}
          </User>
        );
      case "state":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[value]}
            size="sm"
            variant="dot"
          >
            {value}
          </Chip>
        );
    }
    return value;
  };

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="user">Jefe de área</TableColumn>
        <TableColumn key="requestType">Tipo de Solicitud</TableColumn>
        <TableColumn key="email">Correo para notificación</TableColumn>
        <TableColumn key="state">Estado</TableColumn>
      </TableHeader>
      <TableBody items={items} emptyContent="No hay solicitudes registradas.">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
