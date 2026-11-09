import type { Tea } from "../types/types";
import TeaCard from "./TeaCard";

interface ChaiListProps {
  items: Tea[];
}
const TeaList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <TeaCard
            id={item.id}
            name={item.name}
            price={item.price}
            isSpecial={item.isSpecial}
          />
        );
      })}
    </div>
  );
};

export default TeaList;
