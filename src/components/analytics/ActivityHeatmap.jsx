import { dashboardData } from "../../data/dashboardData";

export default function ActivityHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getColor = (value) => {
    if (value === 0) return "bg-zinc-800";
    if (value === 1) return "bg-violet-900";
    if (value === 2) return "bg-violet-700";
    return "bg-violet-500";
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Weekly Activity
      </h2>

      <div className="grid grid-cols-7 gap-2 mb-3">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs text-zinc-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dashboardData.activity.map((value, index) => (
          <div
            key={index}
            className={`h-10 rounded transition-all hover:scale-105 ${getColor(
              value
            )}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6 text-sm text-zinc-500">
        <span>Less</span>

        <div className="w-4 h-4 rounded bg-zinc-800"></div>
        <div className="w-4 h-4 rounded bg-violet-900"></div>
        <div className="w-4 h-4 rounded bg-violet-700"></div>
        <div className="w-4 h-4 rounded bg-violet-500"></div>

        <span>More</span>
      </div>
    </div>
  );
}