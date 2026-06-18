import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "W1", score: 52 },
  { week: "W2", score: 58 },
  { week: "W3", score: 61 },
  { week: "W4", score: 65 },
  { week: "W5", score: 68 },
];

export default function ReadinessTrend() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">
        Readiness Trend
      </h3>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="week"
              stroke="#71717a"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#8b5cf6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}