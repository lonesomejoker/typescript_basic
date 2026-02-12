import React from "react";

type Color = "white" | "black" | "green"; //unions

interface ButtonProps {
  backgroundColor?: string;
  textColor: Color;
  children: React.ReactNode; //it allows everything inside it
  //children:JSX.Element; // it is more strict than reactNode which allows passin only elements like icons div, but no text
  padding?: number[]; //array of numbers
  margin?: [number, number]; //tuple
  borderRadius: Record<string, number>;
}

const Button = ({
  backgroundColor = "bg-blue-500",
  children,
  textColor,
  padding,
  margin,
  borderRadius,
}: ButtonProps) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${padding} ${margin} ${borderRadius} px-4 py-2.5 rounded-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
