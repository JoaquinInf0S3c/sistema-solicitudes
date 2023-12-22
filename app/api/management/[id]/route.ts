import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { ManagementUpdateSchema } from "@/lib/schemas";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const management = await prisma.management.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(management);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const managementFound = await prisma.management.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!managementFound) {
    return Response.json({
      error: "La gerencia no existe",
    });
  }

  const validatedManagement = ManagementUpdateSchema.safeParse(
    await request.json()
  );

  if (!validatedManagement.success) {
    return NextResponse.json(validatedManagement.error);
  }

  const { name } = validatedManagement.data;

  const management = await prisma.management.update({
    where: {
      id: params.id,
    },
    data: {
      name: name,
    },
  });

  return NextResponse.json(management);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const management = await prisma.management.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(management);
}
