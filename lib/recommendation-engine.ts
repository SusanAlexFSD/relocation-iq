import { RecommendationRequest } from "./types";

export function calculateScore(
  rent: number,
  crime: number,
  broadband: number,
  commute: number,
  request: RecommendationRequest
) {
  const monthlySalary = request.salary / 12;

  const affordableRent = monthlySalary * 0.3;

  const affordabilityScore =
    affordableRent - rent;

  const commuteScore =
    commute <= request.maxCommute
      ? 100
      : -100;

  const safetyScore = crime;

  const broadbandScore =
    broadband / 10;

  return (
    affordabilityScore +
    commuteScore +
    safetyScore +
    broadbandScore
  );
}