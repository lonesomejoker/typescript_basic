import React from "react";

type buttonProps<T> = {
  countValue?: T;  
  countHistory?: T[];   //simply defining relation between these two, if one is string another should be array ofstring, likewise other datatypes
};

export default function <T>({ countValue, countHistory }: buttonProps<T>) {
  return (
    <div>
      <button>Click Me </button>
    </div>
  );
}
