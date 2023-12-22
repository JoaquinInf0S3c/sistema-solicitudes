import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { DepartmentSchema } from "@/lib/schemas";

export async function GET(_request: NextRequest) {
  const departments = await prisma.department.findMany();
  return NextResponse.json(departments);
}

export async function POST(request: NextRequest) {
  const validatedDepartment = DepartmentSchema.safeParse(await request.json());

  if (!validatedDepartment.success) {
    return NextResponse.json(validatedDepartment.error);
  }

  const { name, managementName } = validatedDepartment.data;

  const existingDepartment = await prisma.department.findUnique({
    where: {
      name: name,
    },
  });

  if (existingDepartment) {
    return NextResponse.json({
      error: "El departamento ya existe",
    });
  }

  const department = await prisma.department.create({
    data: {
      name: name,
      managementName: managementName,
    },
  });

  return NextResponse.json(department);
}
