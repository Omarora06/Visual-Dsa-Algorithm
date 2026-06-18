import { Link } from "react-router-dom";

export default function Visualizers() {
  const visualizers = [
    {
      title: "Array Visualizer",
      description:
        "Visualize traversal, search, insert and delete operations.",
      path: "/array-visualizer",
    },
    {
      title: "Binary Search Visualizer",
      description:
        "Watch low, mid and high pointers move during binary search.",
      path: "/binary-search",
    },
  ];

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-2">
        Visualizers
      </h1>

      <p className="text-zinc-400 mb-8">
        Learn data structures and algorithms visually.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        {visualizers.map((visualizer) => (
          <div
            key={visualizer.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {visualizer.title}
            </h2>

            <p className="text-zinc-400 mb-6">
              {visualizer.description}
            </p>

            <Link
              to={visualizer.path}
              className="inline-block bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg"
            >
              Launch
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}