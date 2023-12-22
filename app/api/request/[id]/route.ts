import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";
import { RequestUpdateSchema } from "@/lib/schemas";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const request = await prisma.request.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(request);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const validatedRequest = RequestUpdateSchema.safeParse(await req.json());

  if (!validatedRequest.success) {
    return NextResponse.json(validatedRequest.error);
  }

  const { userId, requestTypeId, reasonId, email, state } = validatedRequest.data;

  const request = await prisma.request.update({
    where: {
      id: params.id,
    },
    data: {
      userId: userId,
      requestTypeId: requestTypeId,
      reasonId: reasonId,
      email: email,
      state: state,
    },
  });

  return NextResponse.json(request);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const request = await prisma.request.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(request);
}
