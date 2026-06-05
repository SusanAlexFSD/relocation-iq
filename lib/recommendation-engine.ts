import { RecommendationRequest } from "./types";

export function calculateScore(
  rent: number,
  crime: number,
  broadband: number,
  commute: number,
  request: RecommendationRequest
) {
  const affordabilityScore = 2000 - rent;

  const commuteScore =
    commute <= request.maxCommute
      ? 100
      : 0;

  const safetyScore = crime;

  const broadbandScore = broadband / 10;

  return (
    affordabilityScore +
    commuteScore +
    safetyScore +
    broadbandScore
  );
}