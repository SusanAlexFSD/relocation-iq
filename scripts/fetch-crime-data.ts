import "dotenv/config";

async function main() {
  const latitude = 55.8298;
  const longitude = -4.2927;

  const url =
    `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`;

  console.log(url);

  const response = await fetch(url);

  console.log("Status:", response.status);

  const data = await response.json();

  console.log("Number of crimes:", data.length);
  console.log(data.slice(0, 3));
}

main().catch(console.error);