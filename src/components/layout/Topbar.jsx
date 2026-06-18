import { dashboardData } from "../../data/dashboardData";

export default function Topbar() {
  return (
    <header className="h-18 border-b border-zinc-800 flex items-center justify-between px-8">

      <h1 className="text-2xl font-semibold">
        Welcome Back, {dashboardData.user.name}
      </h1>

      <div className="flex items-center gap-4">

        <div className="bg-zinc-800 px-6 py-3 rounded-xl">
          🔥 {dashboardData.user.streak} Day Streak
        </div>

        <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-lg font-semibold">
          {dashboardData.user.name.slice(0, 2).toUpperCase()}
        </div>

      </div>

    </header>
  );
}