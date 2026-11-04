import { useState } from "react";

type countValue = number | null;

const Counter = () => {
  const [count, setCount] = useState<countValue>(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        className=" rounded-lg px-4 py-2 w-fit text-white bg-black"
        onClick={() => setCount((c: countValue) => (c === null ? 0 : c) + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
