import React from "react";
//generics, functions which helps to work with multiple data types or with reusable components

type buttonProps<T> = {
  countValue?: T;
  countHistory?: T[]; //simply defining relation between these two, if one is string another should be array ofstring, likewise other datatypes
};

export default function <T>({ countValue, countHistory }: buttonProps<T>) {
  //<T>at first is a place holder
  function logAndReturn<T>(value: T): T {
    console.log("generics:", value);
    return value;
  }
  // function log2(value: string) {
  //   console.log("generics:", value);
  //   return value;
  // }

  // const example=log2(43);

  const nymResult = logAndReturn<number>(42);
  const stringResult = logAndReturn("Shirish");
  const boolResult = logAndReturn(true);
  return (
    <div>
      <button>Click Me </button>
      <p>{nymResult}</p>
      <p>{stringResult}</p>
      <p>{boolResult ? "true" : "false"}</p>
    </div>
  );
}
