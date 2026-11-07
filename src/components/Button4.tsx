import React, { useRef, useState } from "react";

interface User {
  name: string;
  age: number;
}
//event handling types
const Button4 = () => {
  // const [count, setCount] = useState<number>(0); <> not needed react infer itself instead use without type except for objects

  const [user, setUser] = useState<User | null>(null); //initially its gonna be null
  //useEffect ❌type not needed

  const ref=useRef<HTMLButtonElement>(null);
  //const ref=useRef<HTMLInputElement>(null);
  //const ref=useRef<HTMLElement>(null);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>, //this is automatically given by react, use this if passing functions
  ) => {
    console.log(event);
  };

  const data = user?.name; //chaining compulsory cause user can be null
  return <button ref={ref} onClick={handleClick}>Click</button>;
};

export default Button4;
