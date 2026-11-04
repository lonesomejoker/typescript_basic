import type { Drinks as DrinkType } from "../types/drinks.ts";
import DrinkList from "../components/drinks/DrinkList.tsx";
import { TeaCard } from "../components/drinks/TeaCard.tsx";
import OrderForm from "../components/drinks/OrderForm.tsx";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { PiCoffeeFill } from "react-icons/pi";
import { Card } from "../components/drinks/Card.tsx";

const sampleDrinks: DrinkType[] = [
  { name: "Green Tea", price: 2.99, isSpecial: true },
  { name: "Black Tea", price: 1.99, isSpecial: false },
  { name: "Matcha Latte", price: 4.5, isSpecial: true },
  { name: "Earl Grey", price: 3.25, isSpecial: false },
  { name: "Masala Chai", price: 2.49, isSpecial: true },
];

const Drinks = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-stone-900">
            <PiCoffeeFill className="text-xl text-stone-700" />
            Drinks Menu
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3.5 py-1.5 text-sm font-medium text-stone-600 shadow-sm transition-colors hover:bg-stone-50 hover:text-stone-900"
          >
            <FiArrowLeft className="text-sm" />
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-6 py-10">
        {/* ── Featured Teas ── */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-stone-800">
              Featured Teas
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Hand-picked selections from our menu
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <TeaCard name="Green Tea" price={2.99} isSpecial={true} />
            <TeaCard name="Matcha Latte" price={4.5} isSpecial={true} />
            <TeaCard name="Earl Grey" price={3.25} />
          </div>
        </section>

        {/* ── Full Menu ── */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-stone-800">Full Menu</h2>
            <p className="mt-1 text-sm text-stone-500">
              All available beverages at a glance
            </p>
          </div>
          <DrinkList items={sampleDrinks} />
        </section>

        {/* ── Order Form ── */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-stone-800">
              Place an Order
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Pick your drink and tell us how many cups you'd like.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <OrderForm
              onSubmit={(order) => console.log("placed order:", order)}
            />
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-3 gap-5">
        <Card
          title="Custom Card"
          footer={ //its a ReactNode 
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Click Me
            </button>
          }
        >
          <p>This is a custom card with a title, content, and footer.</p>
        </Card>
      </section>
    </div>
  );
};

export default Drinks;
