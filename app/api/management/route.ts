import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { ManagementSchema } from "@/lib/schemas";

export async function GET(_request: NextRequest) {
  const managements = await prisma.management.findMany();
  return NextResponse.json(managements);
}

export async function POST(request: NextRequest) {
  const validatedManagement = ManagementSchema.safeParse(await request.json());

  if (!validatedManagement.success) {
    return NextResponse.json(validatedManagement.error);
  }

  const { name } = validatedManagement.data;

  const existingManagement = await prisma.management.findUnique({
    where: {
      name: name,
    },
  });

  if (existingManagement) {
    return NextResponse.json({
      error: "La gerencia ya existe",
    });
  }

  const management = await prisma.management.create({
    data: {
      name: name,
    },
  });

  return NextResponse.json(management);
}
