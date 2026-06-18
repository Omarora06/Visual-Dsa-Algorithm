import { dashboardData } from "../../data/dashboardData";

export default function CompanyReadiness() {
  const getStatusColor = (score) => {
    if (score >= 70) return "🟢";
    if (score >= 60) return "🟡";
    return "🔴";
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">
      <h2 className="text-xl font-semibold mb-6">
        Company Readiness
      </h2>

      <div className="space-y-5">
        {dashboardData.companyReadiness.map((item) => (
          <div key={item.company}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {item.company}
                </span>

                <span>{getStatusColor(item.score)}</span>
              </div>

              <span>{item.score}%</span>
            </div>

            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  item.score >= 70
                    ? "bg-green-500"
                    : item.score >= 60
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{
                  width: `${item.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="mt-8 border-t border-zinc-800 pt-6">

        <h3 className="font-semibold mb-4 text-violet-400">
          AI Insights
        </h3>

        <div className="space-y-4">

          <div className="bg-zinc-800/50 rounded-xl p-4">
            <div className="font-medium text-white">
              Google
            </div>

            <p className="text-zinc-400 text-sm mt-1">
              Focus on Graphs, Dynamic Programming,
              and advanced Tree problems to reach
              80%+ readiness.
            </p>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-4">
            <div className="font-medium text-white">
              Strongest Area
            </div>

            <p className="text-zinc-400 text-sm mt-1">
              Arrays and Sliding Window patterns
              are currently your highest scoring topics.
            </p>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-4">
            <div className="font-medium text-white">
              Next Milestone
            </div>

            <p className="text-zinc-400 text-sm mt-1">
              Solve 10 more Graph problems to unlock
              the Advanced Interview Track.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}