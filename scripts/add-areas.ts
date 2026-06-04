import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.area.createMany({
    data: [
      {
        name: "Shawlands",
        city: "Glasgow",
        region: "Scotland",
        postcode: "G41",
      },
      {
        name: "Partick",
        city: "Glasgow",
        region: "Scotland",
        postcode: "G11",
      },
      {
        name: "Dennistoun",
        city: "Glasgow",
        region: "Scotland",
        postcode: "G31",
      },
      {
        name: "Bearsden",
        city: "Glasgow",
        region: "Scotland",
        postcode: "G61",
      },
    ],
  });

  console.log("Areas added");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });