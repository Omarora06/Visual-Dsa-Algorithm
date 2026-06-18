import { dashboardData } from "../../data/dashboardData";

export default function AICoachCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          AI Coach
        </h2>

        <span className="bg-violet-600 text-xs px-3 py-1 rounded-lg">
          ACTIVE
        </span>
      </div>

      <div className="space-y-4">

        <div className="bg-zinc-800 rounded-xl p-4">
          <div className="text-zinc-400 text-sm">
            🎯 Target Company
          </div>

          <div className="font-semibold mt-1">
            {dashboardData.user.targetCompany}
          </div>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4">
          <div className="text-zinc-400 text-sm">
            🧠 Current Level
          </div>

          <div className="font-semibold mt-1">
            {dashboardData.user.level}
          </div>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4">
          <div className="text-zinc-400 text-sm">
            📈 Recommendation
          </div>

          <div className="font-semibold mt-1">
            Focus on Graphs and Dynamic Programming
          </div>
        </div>

      </div>

      <button className="w-full mt-6 bg-violet-600 hover:bg-violet-500 py-3 rounded-xl font-medium">
        Generate Personalized Plan
      </button>

    </div>
  );
}