async function getRecommendations() {
  const response = await fetch(
    "http://localhost:3000/api/recommendations",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function ResultsPage() {
  const recommendations = await getRecommendations();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Recommended Areas
      </h1>

      {recommendations.map((area: any) => (
        <div
          key={area.name}
          className="border rounded-lg p-4 mb-4"
        >
          <h2 className="text-xl font-semibold">
            {area.name}
          </h2>

          <p>Score: {area.score}</p>
          <p>Rent: £{area.rent}</p>
          <p>Crime: {area.crime}</p>
          <p>Broadband: {area.broadband} Mbps</p>
          <p>Commute: {area.commute} mins</p>
        </div>
      ))}
    </main>
  );
}