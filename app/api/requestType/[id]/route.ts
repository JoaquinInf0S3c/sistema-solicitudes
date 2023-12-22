import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { RequestTypeSchema } from "@/lib/schemas";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const requestType = await prisma.requestType.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(requestType);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const requestTypeFound = await prisma.requestType.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!requestTypeFound) {
    return Response.json({
      error: "El tipo de solicitud no existe",
    });
  }

  const validatedRequestType = RequestTypeSchema.safeParse(
    await request.json()
  );

  if (!validatedRequestType.success) {
    return NextResponse.json(validatedRequestType.error);
  }

  const { name } = validatedRequestType.data;

  const requestType = await prisma.requestType.update({
    where: {
      id: params.id,
    },
    data: {
      name: name,
    },
  });

  return NextResponse.json(requestType);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const requestType = await prisma.requestType.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(requestType);
}
