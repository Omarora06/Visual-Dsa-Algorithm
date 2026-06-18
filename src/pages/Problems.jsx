import { dashboardData } from "../data/dashboardData";

export default function Problems() {
  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Problems
          </h1>

          <p className="text-zinc-400 mt-2">
            Recommended practice problems
          </p>
        </div>

        <input
          type="text"
          placeholder="Search problems..."
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
        />

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

        <div className="grid grid-cols-4 p-4 border-b border-zinc-800 font-semibold">
          <div>Problem</div>
          <div>Topic</div>
          <div>Difficulty</div>
          <div>Action</div>
        </div>

        {dashboardData.recommendedProblems.map((problem) => (
          <div
            key={problem.id}
            className="grid grid-cols-4 p-4 border-b border-zinc-800"
          >
            <div>{problem.title}</div>

            <div className="text-zinc-400">
              {problem.topic}
            </div>

            <div className="text-green-400">
              {problem.difficulty}
            </div>

            <button className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg w-fit">
              Solve
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}