import { dashboardData } from "../../data/dashboardData";

export default function PatternCoverage() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Pattern Coverage
      </h2>

      <div className="space-y-3">
        {dashboardData.patterns.map((pattern) => (
          <div
            key={pattern}
            className="bg-zinc-800 rounded-lg p-3"
          >
            {pattern}
          </div>
        ))}
      </div>
    </div>
  );
}