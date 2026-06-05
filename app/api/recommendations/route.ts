import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateScore } from "@/lib/recommendation-engine";

export async function POST(request: Request) {

const body = await request.json();

const recommendationRequest = {
  salary: body.salary,
  maxCommute: body.maxCommute,
  bedrooms: body.bedrooms,
};

console.log(body);
  const areas = await prisma.area.findMany({
    include: {
      rentalData: true,
      crimeData: true,
      broadbandData: true,
      commuteData: true,
    },
  });

  const recommendations = areas.map((area) => {
    const rent =
      area.rentalData[area.rentalData.length - 1]?.averageRent ?? 0;

    const crime =
      area.crimeData[area.crimeData.length - 1]?.crimeScore ?? 0;

    const broadband =
      area.broadbandData[area.broadbandData.length - 1]?.averageSpeed ?? 0;

    const commute =
      area.commuteData[area.commuteData.length - 1]?.averageMinutes ?? 0;

    const score = calculateScore(
      rent,
      crime,
      broadband,
      commute,
      recommendationRequest
    );

    return {
      name: area.name,
      score,
      rent,
      crime,
      broadband,
      commute,
    };
  });

  recommendations.sort((a, b) => b.score - a.score);

  return NextResponse.json(recommendations);
}