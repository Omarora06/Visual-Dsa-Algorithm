import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Visualizers from "./pages/Visualizers";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import ArrayVisualizer from "./pages/ArrayVisualizer";
import BinarySearchVisualizer from "./pages/BinarySearchVisualizer";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-black text-white">
        
        <Sidebar />

        <div className="flex-1 flex flex-col">
          
          <Topbar />

          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/visualizers" element={<Visualizers />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />

              <Route
                path="/array-visualizer"
                element={<ArrayVisualizer />}
              />

              <Route
                path="/binary-search"
                element={<BinarySearchVisualizer />}
              />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}