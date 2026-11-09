import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}
const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-[50%] mx-auto bg-gray-100 p-10 rounded-lg mt-5 flex flex-col "
    >
      <label>Tea Name</label>

      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label> Cups: </label>

      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value))
        }
      />

      <button type="submit">Order</button>
    </form>
  );
};

export default OrderForm;
