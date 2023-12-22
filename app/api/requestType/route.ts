import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { RequestTypeSchema } from "@/lib/schemas";

export async function GET() {
  const requestTypes = await prisma.requestType.findMany();
  return NextResponse.json(requestTypes);
}

export async function POST(request: NextRequest) {
  const validatedRequestType = RequestTypeSchema.safeParse(
    await request.json()
  );

  if (!validatedRequestType.success) {
    return NextResponse.json(validatedRequestType.error);
  }

  const { name } = validatedRequestType.data;

  const requestType = await prisma.requestType.create({
    data: {
      name: name,
    },
  });

  return NextResponse.json(requestType);
}
