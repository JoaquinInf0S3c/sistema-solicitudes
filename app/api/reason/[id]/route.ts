import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";
import { ReasonUpdateSchema } from "@/lib/schemas";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const reason = await prisma.reason.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(reason);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const validatedReason = ReasonUpdateSchema.safeParse(await request.json());

  if (!validatedReason.success) {
    return NextResponse.json(validatedReason.error);
  }

  const { name } = validatedReason.data;

  const existingReason = await prisma.reason.findUnique({
    where: {
      name: name,
    },
  });

  if (existingReason) {
    return NextResponse.json({
      error: "El motivo ya existe",
    });
  }

  const reason = await prisma.reason.update({
    where: {
      id: params.id,
    },
    data: {
      name: name,
    },
  });

  return NextResponse.json(reason);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const reason = await prisma.reason.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(reason);
}
