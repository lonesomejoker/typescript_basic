import React, { useEffect } from "react";

const Unknown = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data: unknown) => {
       //
      });
  }, []);
  return <div></div>;
};

export default Unknown;
