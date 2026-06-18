import { dashboardData } from "../../data/dashboardData";

export default function TopicMasteryRadar() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Topic Mastery
      </h2>

      <div className="space-y-4">
        {dashboardData.topics.map((topic) => (
          <div key={topic.name}>
            <div className="flex justify-between mb-2">
              <span>{topic.name}</span>
              <span>{topic.progress}%</span>
            </div>

            <div className="h-2 bg-zinc-800 rounded-full">
              <div
                className="h-2 bg-violet-500 rounded-full"
                style={{
                  width: `${topic.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}