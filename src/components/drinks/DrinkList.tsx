import type { Drinks } from "../../types/drinks.ts";
import { FiStar } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

interface DrinkListProps {
  items: Drinks[];
}

const DrinkList = ({ items }: DrinkListProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-stone-100 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
            <th className="px-6 py-3">Drink</th>
            <th className="px-6 py-3 text-right">Price</th>
            <th className="px-6 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {items.map((drink: Drinks) => (
            <tr
              key={drink.name}
              className="transition-colors hover:bg-stone-50"
            >
              <td className="px-6 py-4">
                <span className="font-medium text-stone-800">{drink.name}</span>
              </td>
              <td className="px-6 py-4 text-right font-semibold text-stone-700">
                ${drink.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center">
                {drink.isSpecial ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    <FiStar className="text-[10px]" />
                    Special
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500">
                    <FiCircle className="text-[10px]" />
                    Regular
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrinkList;
