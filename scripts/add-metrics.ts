import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  // Clear existing data

  await prisma.rentalData.deleteMany();
  await prisma.crimeData.deleteMany();
  await prisma.broadbandData.deleteMany();
  await prisma.commuteData.deleteMany();

  // Rental Data

  await prisma.rentalData.createMany({
    data: [
      {
        areaId: 1,
        averageRent1Bed: 850,
        averageRent2Bed: 1050,
        averageRent3Bed: 1300,
        averageRent4Bed: 1600,
      },
      {
        areaId: 2,
        averageRent1Bed: 1000,
        averageRent2Bed: 1200,
        averageRent3Bed: 1500,
        averageRent4Bed: 1800,
      },
      {
        areaId: 3,
        averageRent1Bed: 750,
        averageRent2Bed: 950,
        averageRent3Bed: 1200,
        averageRent4Bed: 1450,
      },
      {
        areaId: 4,
        averageRent1Bed: 1200,
        averageRent2Bed: 1450,
        averageRent3Bed: 1800,
        averageRent4Bed: 2200,
      },
    ],
  });

  // Crime Data

  await prisma.crimeData.createMany({
    data: [
      { areaId: 1, crimeScore: 82 },
      { areaId: 2, crimeScore: 78 },
      { areaId: 3, crimeScore: 72 },
      { areaId: 4, crimeScore: 92 },
    ],
  });

  // Broadband Data

  await prisma.broadbandData.createMany({
    data: [
      { areaId: 1, averageSpeed: 900 },
      { areaId: 2, averageSpeed: 1000 },
      { areaId: 3, averageSpeed: 850 },
      { areaId: 4, averageSpeed: 950 },
    ],
  });

  // Commute Data

  await prisma.commuteData.createMany({
    data: [
      {
        areaId: 1,
        destination: "Glasgow City Centre",
        averageMinutes: 18,
      },
      {
        areaId: 2,
        destination: "Glasgow City Centre",
        averageMinutes: 15,
      },
      {
        areaId: 3,
        destination: "Glasgow City Centre",
        averageMinutes: 20,
      },
      {
        areaId: 4,
        destination: "Glasgow City Centre",
        averageMinutes: 28,
      },
    ],
  });

  console.log("Metrics added successfully");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });