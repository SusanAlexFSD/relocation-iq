import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RecommendPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Ideal Area
      </h1>

      <div className="space-y-6">

        <div>
          <Label>Annual Salary</Label>
          <Input placeholder="42000" />
        </div>

        <div>
          <Label>Work Location</Label>
          <Input placeholder="Glasgow City Centre" />
        </div>

        <div>
            <Label>Maximum Commute (minutes)</Label>
            <Input placeholder="45" />
        </div>

        <div>
            <Label>Bedrooms Required</Label>
            <Input placeholder="2" />
        </div>

        <div>
            <Label>Priority</Label>
            <Input placeholder="Affordability" />
        </div>

        <Button>
             Generate Recommendations
        </Button>

      </div>
    </main>
  );
}