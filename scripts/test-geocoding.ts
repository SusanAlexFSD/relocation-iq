import "dotenv/config";

import { searchLocation } from "../lib/geocoding";

async function main() {
  const result = await searchLocation("Glasgow");

  console.log(result);
}

main().catch(console.error);