export default function AIStudyPlan() {
  const roadmap = [
    {
      week: "Week 1",
      topics: "Arrays • Strings",
      improvement: "+5%",
      status: "completed",
    },
    {
      week: "Week 2",
      topics: "Sliding Window • Two Pointers",
      improvement: "+4%",
      status: "current",
    },
    {
      week: "Week 3",
      topics: "Trees • BST",
      improvement: "+3%",
      status: "upcoming",
    },
  ];

  const getStatus = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: "✓",
          label: "Completed",
          color: "text-green-400",
          border: "border-green-500/30",
        };

      case "current":
        return {
          icon: "◉",
          label: "In Progress",
          color: "text-yellow-400",
          border: "border-yellow-500/30",
        };

      default:
        return {
          icon: "○",
          label: "Upcoming",
          color: "text-zinc-400",
          border: "border-zinc-700",
        };
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          AI Study Plan
        </h2>

        <span className="text-sm text-violet-400">
          33% Complete
        </span>
      </div>

      {/* Overall Progress */}
      <div className="mb-6">
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500"
            style={{ width: "33%" }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {roadmap.map((item) => {
          const status = getStatus(item.status);

          return (
            <div
              key={item.week}
              className={`bg-zinc-800/50 border rounded-xl p-4 ${status.border}`}
            >
              <div className="flex justify-between items-start">

                <div>
                  <div className="font-semibold">
                    {item.week}
                  </div>

                  <div className="text-zinc-400 mt-2">
                    {item.topics}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-green-400 font-semibold">
                    {item.improvement}
                  </div>

                  <div
                    className={`text-sm mt-2 ${status.color}`}
                  >
                    {status.icon} {status.label}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}