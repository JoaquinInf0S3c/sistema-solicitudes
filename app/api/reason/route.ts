import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";
import { ReasonSchema } from "@/lib/schemas";

export async function GET(_req: NextRequest) {
  const reasons = await prisma.reason.findMany();
  return NextResponse.json(reasons);
}

export async function POST(req: NextRequest) {
  const validatedReason = ReasonSchema.safeParse(await req.json());

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

  const reason = await prisma.reason.create({
    data: {
      name: name,
    },
  });

  return NextResponse.json(reason);
}
