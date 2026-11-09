import Counter from "../components/Counter";
import DummyUsers from "../components/DummyUsers";
import NextCard from "../components/NextCard";
import OrderForm from "../components/OrderForm";
import TeaCard from "../components/TeaCard";
import TeaList from "../components/TeaList";
import type { Tea } from "../types/types";

const TypescriptReact = () => {
  const teaList: Tea[] = [
    { id: 1, name: "Ginger", price: 10 },
    { id: 2, name: "Lemon", price: 15, isSpecial: true },
    { id: 3, name: "Honey", price: 20 },
  ];
  return (
    <div className=" my-[6rem]">
      <TeaCard id={1} name={"Shirish"} price={10} isSpecial />
      <Counter />

      <div className=" border-t-2 border-gray-300  mt-5">
        <TeaList items={teaList} />
      </div>

      <OrderForm
        onSubmit={(order) => {
          console.log(` Order ${order.cups} cups of ${order.name} Tea`);
        }}
      />

      <div className=" w-[50%] mx-auto bg-gray-100 drop-shadow-xl p-7 mt-[2.5rem] ">
        <NextCard title="EXample" footer={<button className=" bg-black text-white px-6 py-3 rounded-sm">Click Me</button>}>
          <h1>Next Card</h1>
        </NextCard>
      </div>

      <div className=" ">
        <DummyUsers/>
      </div>
    </div>
  );
};

export default TypescriptReact;
