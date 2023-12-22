import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import { RequestSchema } from "@/lib/schemas";

export async function GET(_req: NextRequest) {
  const requests = await prisma.request.findMany();
  return NextResponse.json(requests);
}

export async function POST(req: NextRequest) {
  const validatedRequest = RequestSchema.safeParse(await req.json());

  if (!validatedRequest.success) {
    return NextResponse.json(validatedRequest.error);
  }

  const { userId, requestTypeName, reasonName, email, state} = validatedRequest.data;

  const request = await prisma.request.create({
    data: {
      userId: userId,
      requestTypeName: requestTypeName,
      reasonName: reasonName,
      email: email,
      state: state,
    },
  });

  return NextResponse.json(request);
}
