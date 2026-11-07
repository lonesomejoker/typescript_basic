import type { ReactNode } from "react";

// ─── Fix: Constrain T to ReactNode ───
// Without this constraint, T could be anything (an object, a function, etc.)
// and React wouldn't know how to render it inside <p> or <li>.
// By writing `T extends ReactNode`, we guarantee T is something JSX can display
// (string, number, boolean, null, or a React element).
type buttonProps<T extends ReactNode> = {
  countValue?: T;
  countHistory?: T[]; //simply defining relation between these two, if one is string another should be array ofstring, likewise other datatypes
};

export const GenericExample=<T extends ReactNode>({
  countValue,
  countHistory,
}: buttonProps<T>)=> {
  return (
    <div>
      <button>Click Me </button>
      <p>{countValue}</p>
      <ul>
        {countHistory?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// T = number
// countValue  → latest sensor reading
// countHistory → last N readings for a mini chart/log

<GenericExample<number>
  countValue={23.5}
  countHistory={[21.0, 21.8, 22.3, 23.1, 23.5]}
/>
// Shows: current temp is 23.5°C
// History: trend over the last 5 readings
