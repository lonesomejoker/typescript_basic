import React from "react";
import type { Colors } from "../lib/types";

type ClickHandler = (text: string) => number | undefined;

type ButtonProps = {
  style: React.CSSProperties;
  onClick?: ClickHandler;
  color?:Colors
};

//adding base properties + new ones
type superButtonProps = ButtonProps & {
  size?: "md" | "lg";
};

//same functionality with interface
interface newButtonProps extends ButtonProps {
  style: React.CSSProperties;
  onClick?: ClickHandler;
}

export const Button2 = ({ style, onClick }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick}>
      Button2
    </button>
  );
};
