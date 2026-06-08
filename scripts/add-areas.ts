import "dotenv/config";
import { prisma } from "../lib/prisma";
import { ukAreas } from "../data/uk-areas";

async function main() {
  await prisma.area.createMany({
    data: ukAreas,
  });

  console.log("Areas added successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });