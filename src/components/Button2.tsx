import React from "react";
import type { Colors } from "../lib/types";

type ClickHandler = (test: string) => number | undefined;

type ButtonProps = {
  style: React.CSSProperties; //inbuilt type for css properties
  onClick?: ClickHandler;
  color?:Colors
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  handleLogin?: (username: string, password: string) => void;
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
    <button style={style} onClick={() => onClick?.("Button2")}>
      Button2
    </button>
  );
};
