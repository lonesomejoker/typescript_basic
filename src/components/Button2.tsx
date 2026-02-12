import React from 'react'

type ClickHandler = (text: string) => number;

type ButtonProps = {
    style: React.CSSProperties;
    onClick?: ClickHandler;
}

export const Button2 = ({style, onClick}: ButtonProps) => {
  return (
    <button style={style} onClick={onClick}>Button2</button>
  )
}