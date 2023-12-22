import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { DepartmentUpdateSchema } from "@/lib/schemas";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const department = await prisma.department.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(department);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const departmentFound = await prisma.department.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!departmentFound) {
    return Response.json({
      error: "El departamento no existe",
    });
  }

  const validatedDepartment = DepartmentUpdateSchema.safeParse(await request.json());

  if (!validatedDepartment.success) {
    return NextResponse.json(validatedDepartment.error);
  }

  const { name, managementId } = validatedDepartment.data;

  const department = await prisma.department.update({
    where: {
      id: params.id,
    },
    data: {
      name: name,
      managementId: managementId,
    },
  });

  return NextResponse.json(department);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const department = await prisma.department.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(department);
}
