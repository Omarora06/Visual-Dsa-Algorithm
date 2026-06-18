import {
  FiBookOpen,
  FiTrendingUp,
  FiTarget,
  FiAward,
} from "react-icons/fi";

export default function KPICard({
  title,
  value,
  subtitle,
}) {
  const icons = {
    "Problems Solved": <FiBookOpen size={22} />,
    "Current Streak": <FiAward size={22} />,
    Accuracy: <FiTarget size={22} />,
    "Interview Readiness": <FiTrendingUp size={22} />,
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition-all">

      <div className="flex justify-between items-center mb-4">

        <div className="text-zinc-400 text-sm">
          {title}
        </div>

        <div className="text-violet-400">
          {icons[title]}
        </div>

      </div>

      <div className="text-5xl font-bold mb-3">
        {value}
      </div>

      <div className="text-zinc-500 text-sm">
        {subtitle}
      </div>

    </div>
  );
}