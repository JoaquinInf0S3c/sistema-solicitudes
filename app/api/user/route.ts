import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";
import bcrypt from "bcrypt";
import { UserSchema } from "@/lib/schemas";

export async function GET(_request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const validatedUser = UserSchema.safeParse(await request.json());

  if (!validatedUser.success) {
    return NextResponse.json(validatedUser.error);
  }
  const { name, email, password, departmentName } = validatedUser.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return NextResponse.json({
      error: "El usuario ya existe",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
      departmentName: departmentName,
    },
  });

  return NextResponse.json(user);
}
