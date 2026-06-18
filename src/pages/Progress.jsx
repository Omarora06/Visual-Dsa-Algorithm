import TopicMasteryRadar from "../components/analytics/TopicMasteryRadar";
import ActivityHeatmap from "../components/analytics/ActivityHeatmap";
import InterviewReadiness from "../components/analytics/InterviewReadiness";
import PatternCoverage from "../components/analytics/PatternCoverage";
import { dashboardData } from "../data/dashboardData";

export default function Progress() {
  return (
    <div className="p-8 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Progress Analytics
        </h1>

        <p className="text-zinc-400 mt-2">
          Track your interview preparation journey.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-zinc-400 text-sm mb-2">
            Problems Solved
          </div>

          <div className="text-5xl font-bold">
            {dashboardData.stats.solved}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-zinc-400 text-sm mb-2">
            Current Streak
          </div>

          <div className="text-5xl font-bold">
            🔥 {dashboardData.user.streak}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-zinc-400 text-sm mb-2">
            Accuracy
          </div>

          <div className="text-5xl font-bold">
            {dashboardData.stats.accuracy}%
          </div>
        </div>

      </div>

      {/* Readiness + Topic Mastery */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        <InterviewReadiness />

        <TopicMasteryRadar />

      </div>

      {/* Heatmap + Pattern Coverage */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        <ActivityHeatmap />

        <PatternCoverage />

      </div>

    </div>
  );
}