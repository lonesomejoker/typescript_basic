import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";

type OrderData = {
  name: string;
  cups: number;
};

interface OrderFormProps {
  onSubmit: (order: OrderData) => void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Coke");
  const [cups, setCups] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="drink-name"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Drink name
        </label>
        <input
          id="drink-name"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-800 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
          placeholder="e.g. Green Tea"
        />
      </div>

      <div>
        <label
          htmlFor="drink-cups"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Number of cups
        </label>
        <input
          id="drink-cups"
          type="number"
          min={1}
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
          }
          className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-800 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-stone-700 active:bg-stone-800 disabled:opacity-50"
      >
        {submitted ? (
          <>
            <FiCheckCircle className="text-base" />
            Order placed!
          </>
        ) : (
          <>
            <FiSend className="text-base" />
            Place order
          </>
        )}
      </button>
    </form>
  );
};

export default OrderForm;
