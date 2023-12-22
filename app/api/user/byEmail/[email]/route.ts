import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";

export async function GET(
  _request: NextRequest,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      name: true,
    },
  });
  return NextResponse.json(user);
}
