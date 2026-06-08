import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.area.update({
    where: { id: 1 },
    data: {
      latitude: 55.8298,
      longitude: -4.2927,
    },
  });

  await prisma.area.update({
    where: { id: 2 },
    data: {
      latitude: 55.8690,
      longitude: -4.3090,
    },
  });

  await prisma.area.update({
    where: { id: 3 },
    data: {
      latitude: 55.8670,
      longitude: -4.2030,
    },
  });

  await prisma.area.update({
    where: { id: 4 },
    data: {
      latitude: 55.9170,
      longitude: -4.3330,
    },
  });

  console.log("Area coordinates updated");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });