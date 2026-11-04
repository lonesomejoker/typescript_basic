import { PiLeafFill } from "react-icons/pi";
import { IoMdPricetag } from "react-icons/io";

interface TeaCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export const TeaCard = ({ name, price, isSpecial = false }: TeaCardProps) => {
  return (
    <div className="group relative w-56 rounded-2xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-lg">
      {isSpecial && (
        <span className="absolute -top-2.5 right-3 inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900 shadow-sm">
          <IoMdPricetag className="text-xs" />
          Special
        </span>
      )}

      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <PiLeafFill className="text-xl" />
      </div>

      <h3 className="text-base font-semibold text-stone-800">{name}</h3>

      <p className="mt-1 text-2xl font-bold tracking-tight text-stone-900">
        ${price.toFixed(2)}
      </p>

      <button className="mt-4 w-full rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700 active:bg-stone-800">
        Add to order
      </button>
    </div>
  );
};

export default TeaCard;
