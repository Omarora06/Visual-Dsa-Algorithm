import { dashboardData } from "../../data/dashboardData";
import ReadinessTrend from "./ReadinessTrend";

export default function InterviewReadiness() {
  const readiness = dashboardData.stats.readiness;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-full">

      <h2 className="text-2xl font-semibold mb-6">
        Interview Readiness
      </h2>

      <div className="flex flex-col items-center">

        {/* Circular Progress */}
        <div className="relative w-44 h-44 mb-8">

          <svg
            className="w-44 h-44 -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#27272a"
              strokeWidth="8"
              fill="transparent"
            />

            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#8b5cf6"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={251.2}
              strokeDashoffset={
                251.2 - (251.2 * readiness) / 100
              }
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            {readiness}%
          </div>

        </div>

      </div>

      {/* Readiness Factors */}
      <div className="space-y-3 text-lg">

        <div>✓ Problems Solved</div>

        <div>✓ Pattern Coverage</div>

        <div>✓ Consistency Tracking</div>

        <div>✓ Topic Mastery</div>

      </div>

      {/* Trend Chart */}
      <ReadinessTrend />

    </div>
  );
}