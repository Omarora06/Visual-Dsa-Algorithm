import { useState } from "react";

export default function ArrayVisualizer() {
  const initialArray = [5, 2, 8, 1, 9, 4];

  const [array, setArray] = useState(initialArray);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [message, setMessage] = useState("Ready");

  const handleTraverse = () => {
    setMessage("Traversing Array...");

    let index = 0;

    const interval = setInterval(() => {
      setCurrentIndex(index);
      index++;

      if (index >= array.length) {
        clearInterval(interval);

        setTimeout(() => {
          setCurrentIndex(-1);
          setMessage("Traversal Complete");
        }, 500);
      }
    }, 600);
  };

  const handleSearch = () => {
    const target = Number(searchValue);

    if (searchValue === "") {
      setMessage("Enter a value to search");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      setCurrentIndex(index);

      if (array[index] === target) {
        clearInterval(interval);

        setMessage(`Found ${target} at index ${index}`);

        setTimeout(() => {
          setCurrentIndex(-1);
        }, 1000);

        return;
      }

      index++;

      if (index >= array.length) {
        clearInterval(interval);

        setMessage(`${target} not found`);

        setTimeout(() => {
          setCurrentIndex(-1);
        }, 1000);
      }
    }, 600);
  };

  const handleInsert = () => {
    if (newValue === "") {
      setMessage("Enter a value to insert");
      return;
    }

    setArray([...array, Number(newValue)]);
    setMessage(`Inserted ${newValue}`);
    setNewValue("");
  };

  const handleDelete = () => {
    if (array.length === 0) {
      setMessage("Array already empty");
      return;
    }

    const deleted = array[array.length - 1];

    setArray(array.slice(0, -1));
    setMessage(`Deleted ${deleted}`);
  };

  const handleReset = () => {
    setArray(initialArray);
    setCurrentIndex(-1);
    setSearchValue("");
    setNewValue("");
    setMessage("Array Reset");
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Array Visualizer
        </h1>

        <p className="text-zinc-400">
          Learn array operations visually.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        <div className="flex flex-wrap gap-4 justify-center mb-8">

          {array.map((value, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300
              ${
                currentIndex === index
                  ? "bg-green-500 scale-110"
                  : "bg-violet-600"
              }`}
            >
              {value}
            </div>
          ))}

        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">

          <button
            onClick={handleTraverse}
            className="bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl"
          >
            Traverse
          </button>

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl"
          >
            Search
          </button>

          <button
            onClick={handleInsert}
            className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl"
          >
            Insert
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl"
          >
            Delete
          </button>

          <button
            onClick={handleReset}
            className="bg-zinc-700 hover:bg-zinc-600 px-5 py-3 rounded-xl"
          >
            Reset
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">

          <div>
            <label className="block mb-2 text-zinc-400">
              Search Value
            </label>

            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter number"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-400">
              Insert Value
            </label>

            <input
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Enter number"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3"
            />
          </div>

        </div>

        <div className="bg-zinc-800 rounded-xl p-4 text-center text-lg font-medium">
          {message}
        </div>

      </div>
    </div>
  );
}