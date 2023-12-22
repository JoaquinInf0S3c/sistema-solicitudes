import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import bcrypt from "bcrypt";
import { UserUpdateSchema } from "@/lib/schemas";
import { Prisma } from "@prisma/client";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userFound = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!userFound) {
    return Response.json({
      error: "El usuario no existe",
    });
  }

  const validatedUser = UserUpdateSchema.safeParse(await request.json());

  if (!validatedUser.success) {
    return NextResponse.json(validatedUser.error);
  }

  if (validatedUser.data.password) {
    validatedUser.data.password = await bcrypt.hash(
      validatedUser.data.password,
      10
    );
  }

  const user = await prisma.user.update({
    where: {
      id: params.id,
    },
    data: validatedUser.data,
  });

  return NextResponse.json(user);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({
        cause: error.cause,
        code: error.code,
        clientVersion: error.clientVersion,
        name: error.name,
        message: error.message,
      });
    }
  }
}
