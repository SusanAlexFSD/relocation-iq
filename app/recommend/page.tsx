"use client";
import { useState } from "react";

export default function RecommendPage() {

const [salary, setSalary] = useState("");
const [maxCommute, setMaxCommute] = useState("");
const [bedrooms, setBedrooms] = useState("");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Ideal Area
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-2">
            Salary
          </label>

          <input
            type="number"
            name="salary"
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
    </main>
  );
}