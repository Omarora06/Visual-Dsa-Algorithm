import { dashboardData } from "../../data/dashboardData";

export default function RecommendedProblems() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Recommended Problems
        </h2>

        <button className="text-violet-400 hover:text-violet-300">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {dashboardData.recommendedProblems.map((problem) => (
          <div
            key={problem.id}
            className="flex justify-between items-center bg-zinc-800 rounded-xl p-4"
          >
            <div>
              <div className="font-medium">
                {problem.title}
              </div>

              <div className="text-sm text-zinc-400 mt-1">
                {problem.topic}
              </div>
            </div>

            <div className="flex items-center gap-4">

              <span className="text-green-400 text-sm">
                {problem.difficulty}
              </span>

              <button className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-sm">
                Solve
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}