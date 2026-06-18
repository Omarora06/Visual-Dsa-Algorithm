import {
  FiHome,
  FiCode,
  FiBarChart2,
  FiTarget,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition ${
      isActive
        ? "bg-violet-600"
        : "hover:bg-zinc-800"
    }`;

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-5">

      <h2 className="text-2xl font-bold mb-10 text-violet-400">
        VisualDSA
      </h2>

      <nav className="space-y-2">

        <NavLink to="/" end className={linkClass}>
          <FiHome />
          Dashboard
        </NavLink>

        <NavLink to="/problems" className={linkClass}>
          <FiCode />
          Problems
        </NavLink>

        <NavLink to="/visualizers" className={linkClass}>
          <FiBarChart2 />
          Visualizers
        </NavLink>

        <NavLink to="/progress" className={linkClass}>
          <FiTarget />
          Progress
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <FiSettings />
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}