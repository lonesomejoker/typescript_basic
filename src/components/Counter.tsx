import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className=" flex justify-center items-center gap-4 flex-col mt-4">
      <p>Cups ordered:{count}</p>
      <button
        className=" bg-blue-500 text-white rounded px-5 py-3"
        onClick={() => setCount((c) => c + 1)}
      >
        Order a cup
      </button>
    </div>
  );
};

export default Counter;
