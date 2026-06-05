import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.rentalData.createMany({
    data: [
      { areaId: 1, averageRent: 1050 },
      { areaId: 2, averageRent: 1200 },
      { areaId: 3, averageRent: 950 },
      { areaId: 4, averageRent: 1450 },
    ],
  });

  await prisma.crimeData.createMany({
    data: [
      { areaId: 1, crimeScore: 82 },
      { areaId: 2, crimeScore: 78 },
      { areaId: 3, crimeScore: 72 },
      { areaId: 4, crimeScore: 92 },
    ],
  });

  await prisma.broadbandData.createMany({
  data: [
    { areaId: 1, averageSpeed: 900 },
    { areaId: 2, averageSpeed: 1000 },
    { areaId: 3, averageSpeed: 850 },
    { areaId: 4, averageSpeed: 950 },
  ],
    });

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
    }

    console.log("Metrics added successfully");
    
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });