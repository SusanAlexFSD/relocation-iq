import { prisma } from "./prisma";

export interface GeocodingResult {
  name: string;
  latitude: number;
  longitude: number;
}

export async function searchLocation(
  location: string
): Promise<GeocodingResult | null> {
  // Check cache first

  const cached = await prisma.locationCache.findUnique({
    where: {
      searchTerm: location,
    },
  });

  if (cached) {
    console.log("Using cached location");

    return {
      name: cached.displayName,
      latitude: cached.latitude,
      longitude: cached.longitude,
    };
  }

  console.log("Calling geocoding API");

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
      location
    )}`,
    {
      headers: {
        "User-Agent": "RelocationIQ",
      },
    }
  );

  const data = await response.json();

  if (data.length === 0) {
    return null;
  }

  await prisma.locationCache.create({
    data: {
      searchTerm: location,
      displayName: data[0].display_name,
      latitude: Number(data[0].lat),
      longitude: Number(data[0].lon),
    },
  });

  return {
    name: data[0].display_name,
    latitude: Number(data[0].lat),
    longitude: Number(data[0].lon),
  };
}