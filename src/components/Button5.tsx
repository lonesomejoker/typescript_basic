import React, { useEffect } from "react";


type User={
  name:string,
  age:number
}

type Guest = Omit<User, "age">; //means remove age from user type

type ButtonColor = "primary" | "secondary" | "danger";
const buttonTextOptions = ["clik Me!", "cLick me one more time!"] as const;
const Button5 = () => {

  useEffect(() => {
    const buttonType=localStorage.getItem("button") as ButtonColor;
    
  },[])
  return <button>
    {
      buttonTextOptions.map((options)=>{return options })
    }
  </button>;
};

export default Button5;
