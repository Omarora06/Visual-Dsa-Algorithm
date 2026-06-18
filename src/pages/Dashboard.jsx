import KPICard from "../components/cards/KPICard";

import AICoachCard from "../components/ai/AICoachCard";
import AIStudyPlan from "../components/ai/AIStudyPlan";

import TopicMasteryRadar from "../components/analytics/TopicMasteryRadar";
import PatternCoverage from "../components/analytics/PatternCoverage";
import ActivityHeatmap from "../components/analytics/ActivityHeatmap";
import InterviewReadiness from "../components/analytics/InterviewReadiness";
import CompanyReadiness from "../components/analytics/CompanyReadiness";

import RecommendedProblems from "../components/cards/RecommendedProblems";

import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">

      {/* Hero Section */}
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-8">

        <div className="flex flex-col lg:flex-row justify-between gap-6">

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              Welcome back, {dashboardData.user.name} 👋
            </h1>

            <p className="text-zinc-400 mb-6">
              Your interview readiness is currently at{" "}
              <span className="text-violet-400 font-semibold">
                {dashboardData.stats.readiness}%
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-xl">
                Continue Learning
              </button>

              <button className="border border-zinc-700 px-6 py-3 rounded-xl">
                View Study Plan
              </button>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <div className="text-zinc-500 text-sm">
              NEXT RECOMMENDED
            </div>

            <div className="text-2xl font-bold mt-2">
              Graph Traversal
            </div>

            <div className="text-violet-400 mt-1">
              DFS + BFS
            </div>
          </div>

        </div>

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <KPICard
          title="Problems Solved"
          value={dashboardData.stats.solved}
          subtitle="Problems completed"
        />

        <KPICard
          title="Current Streak"
          value={dashboardData.user.streak}
          subtitle="Days in a row"
        />

        <KPICard
          title="Accuracy"
          value={`${dashboardData.stats.accuracy}%`}
          subtitle="Submission success rate"
        />

        <KPICard
          title="Interview Readiness"
          value={`${dashboardData.stats.readiness}%`}
          subtitle="Based on your progress"
        />

      </div>

      {/* AI Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <div className="space-y-4">

          <AICoachCard />

          <AIStudyPlan />

        </div>

        <div className="xl:col-span-2">
          <InterviewReadiness />
        </div>

      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        <TopicMasteryRadar />

        <PatternCoverage />

      </div>

      {/* Activity + Daily Goal */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <div className="xl:col-span-2">
          <ActivityHeatmap />
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Daily Goal
          </h2>

          <div className="text-6xl font-bold">
            {dashboardData.dailyGoal.completed} / {dashboardData.dailyGoal.target}
          </div>

          <p className="text-zinc-400 mt-4">
            Stay consistent and build your interview readiness.
          </p>

          <button className="mt-6 bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl">
            Start Practicing
          </button>

        </div>

      </div>

      {/* Recommended Problems + Company Readiness */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        <RecommendedProblems />

        { <CompanyReadiness /> }

      </div>

    </div>
  );
}