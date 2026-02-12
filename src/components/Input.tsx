import React from "react";

interface InputProps {
  style: { //object types
    backgroundColor: string;
    margin: string;
    padding: string;
  };
}
export const Input = ({ style }: InputProps) => {
  return <input style={style} />;
};
