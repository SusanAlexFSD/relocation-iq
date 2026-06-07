"use client";

import { useState } from "react";

export default function RecommendPage() {
  const [salary, setSalary] = useState("");
  const [maxCommute, setMaxCommute] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const [recommendations, setRecommendations] = useState<any[]>([]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const response = await fetch(
      "/api/recommendations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          salary: Number(salary),
          maxCommute: Number(maxCommute),
          bedrooms: Number(bedrooms),
        }),
      }
    );

    const recommendations = await response.json();

    setRecommendations(recommendations);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Ideal Area
      </h1>

      <div className="mb-6">
        <p>Salary: {salary}</p>
        <p>Max Commute: {maxCommute}</p>
        <p>Bedrooms: {bedrooms}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block mb-2">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Maximum Commute (minutes)
          </label>

          <input
            type="number"
            name="maxCommute"
            value={maxCommute}
            onChange={(e) => setMaxCommute(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Bedrooms
          </label>

          <input
            type="number"
            name="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="border px-4 py-2 rounded"
        >
          Generate Recommendations
        </button>
      </form>

      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Recommended Areas
          </h2>

          {recommendations.map((area) => (
            <div
              key={area.name}
              className="border rounded p-4 mb-4"
            >
              <h3 className="font-semibold">
                {area.name}
              </h3>

              <p>Score: {area.score}</p>
              <p>Rent: £{area.rent}</p>
              <p>Crime: {area.crime}</p>
              <p>Broadband: {area.broadband} Mbps</p>
              <p>Commute: {area.commute} mins</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}