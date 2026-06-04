import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const areas = await prisma.area.findMany();

  return NextResponse.json(areas);
}