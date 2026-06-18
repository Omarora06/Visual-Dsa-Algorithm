import { useState } from "react";

export default function BinarySearchVisualizer() {
  const array = [1, 3, 5, 7, 9, 11, 13, 15];

  const [target, setTarget] = useState("");
  const [low, setLow] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [high, setHigh] = useState(-1);
  const [message, setMessage] = useState("Ready");

  const startSearch = () => {
    const value = Number(target);

    if (!target) {
      setMessage("Enter a number");
      return;
    }

    let l = 0;
    let h = array.length - 1;

    setMessage("Searching...");

    const interval = setInterval(() => {
      if (l > h) {
        clearInterval(interval);
        setMessage("Not Found");
        return;
      }

      const m = Math.floor((l + h) / 2);

      setLow(l);
      setMid(m);
      setHigh(h);

      if (array[m] === value) {
        clearInterval(interval);
        setMessage(`Found ${value} at index ${m}`);
        return;
      }

      if (array[m] < value) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }, 1000);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold">
        Binary Search Visualizer
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        <div className="flex gap-4 justify-center mb-8 flex-wrap">

          {array.map((num, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold
              ${
                index === mid
                  ? "bg-green-500"
                  : index === low
                  ? "bg-blue-500"
                  : index === high
                  ? "bg-red-500"
                  : "bg-violet-600"
              }`}
            >
              {num}
            </div>
          ))}

        </div>

        <div className="flex gap-4 justify-center mb-6">

          <input
            type="number"
            placeholder="Search value"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3"
          />

          <button
            onClick={startSearch}
            className="bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl"
          >
            Start Search
          </button>

        </div>

        <div className="text-center text-lg font-medium">
          {message}
        </div>

      </div>
    </div>
  );
}