import { Link } from "react-router-dom";
import { FiCoffee, FiSun } from "react-icons/fi";
import Button from "./components/Button";
import { Button2 } from "./components/Button2";
import Button3 from "./components/Button3";
import { Input } from "./components/Input";

function App() {
  const onClick = (test: string) => {
    return 5;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Header ── */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight text-stone-900">
            Hi, Shirish 👋
          </h1>
          <p className="text-sm text-stone-400">TypeScript Playground</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-8 px-6 py-10">
        {/* ── Navigation ── */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-wider text-stone-400">
            Pages
          </h2>
          <p className="mb-4 text-sm text-stone-500">
            Navigate to different sections of the app
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/drinks"
              className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
            >
              <FiCoffee className="text-base" />
              Drinks Menu
            </Link>
            <Link
              to="/themes"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
            >
              <FiSun className="text-base" />
              Themes
            </Link>
          </div>
        </section>

        {/* ── Component Showcase ── */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="mb-1 text-sm font-medium uppercase tracking-wider text-stone-400">
            Components
          </h2>
          <p className="mb-5 text-sm text-stone-500">
            Practice components with typed props
          </p>

          <div className="space-y-4">
            {/* Button — custom props */}
            <div className="flex items-center gap-4 rounded-lg bg-stone-50 p-4">
              <span className="w-24 shrink-0 text-xs font-medium text-stone-400">
                Button
              </span>
              <Button
                textColor="white"
                padding={[10, 5, 5, 10]}
                margin={[10, 10]}
                borderRadius={{
                  topLeft: 10,
                  bottomRight: 10,
                  bottomLeft: 10,
                  topRight: 10,
                  bottom: 10,
                  top: 10,
                }}
              >
                Click Here
              </Button>
            </div>

            {/* Button2 — style + onClick */}
            <div className="flex items-center gap-4 rounded-lg bg-stone-50 p-4">
              <span className="w-24 shrink-0 text-xs font-medium text-stone-400">
                Button2
              </span>
              <Button2
                style={{
                  backgroundColor: "#1c1917",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={onClick}
              />
            </div>

            {/* Button3 — ComponentProps */}
            <div className="flex items-center gap-4 rounded-lg bg-stone-50 p-4">
              <span className="w-24 shrink-0 text-xs font-medium text-stone-400">
                Button3
              </span>
              <Button3 />
            </div>

            {/* Input — object style prop */}
            <div className="flex items-center gap-4 rounded-lg bg-stone-50 p-4">
              <span className="w-24 shrink-0 text-xs font-medium text-stone-400">
                Input
              </span>
              <Input
                style={{
                  backgroundColor: "#fafaf9",
                  margin: "0",
                  padding: "10px 14px",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
