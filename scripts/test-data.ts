import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const areas = await prisma.area.findMany({
    include: {
      rentalData: true,
      crimeData: true,
      broadbandData: true,
      commuteData: true,
    },
  });

  console.dir(areas, { depth: null });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });