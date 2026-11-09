import React from "react";
import type { Tea } from "../types/types";


const TeaCard = ({id, name, price, isSpecial = false }: Tea) => {
  return (
    <div className=" text-center" key={id}>
      <h2 className=" text-center">
        {name} {isSpecial && <span>⭐</span>}
      </h2>
      <p>{price}</p>
    </div>
  );
};

export default TeaCard;
