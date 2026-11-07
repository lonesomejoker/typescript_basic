import { useEffect, useState } from "react";
import { z } from "zod";
import axios from "axios";

// ─── Zod schema for the API response ───
const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

// Infer the TypeScript type from the schema
type Todo = z.infer<typeof TodoSchema>;

const Unknown = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AbortController lets us cancel the request if the component unmounts
    // before the response arrives — preventing state updates on dead components.
    // Axios supports AbortController via the `signal` option (same as fetch).
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        // axios.get returns { data, status, headers, ... }
        // Pass `signal` so we can abort this request from the cleanup function
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1",
          { signal: controller.signal }
        );

        // response.data is typed `any` by axios — treat it as `unknown` for safety
        const data: unknown = response.data;

        // Zod validates & narrows `unknown` → `Todo` (throws ZodError if invalid)
        const parsed = TodoSchema.parse(data);

        setTodo(parsed);
        setError(null);
      } catch (err: unknown) {
        // Don't set error state if the request was intentionally cancelled
        if (axios.isCancel(err)) return;

        if (err instanceof z.ZodError) {
          setError(
            `Validation error: ${err.issues.map((e) => e.message).join(", ")}`
          );
        } else if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: abort the request when the component unmounts or effect re-runs.
    // Without this, navigating away mid-request would cause a memory leak.
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div className="p-4 text-stone-500">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!todo) return null;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-stone-800">
        Todo #{todo.id}
      </h3>
      <p className="mt-1 text-stone-600">{todo.title}</p>
      <span
        className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
          todo.completed
            ? "bg-emerald-50 text-emerald-700"
            : "bg-amber-50 text-amber-700"
        }`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
};

export default Unknown;

// ─── Original code (commented out) ───
// import React, { useEffect } from "react";
//
// const Unknown = () => {
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((res) => res.json())
//       .then((data: unknown) => {
//        //
//       });
//   }, []);
//   return <div></div>;
// };
//
// export default Unknown;
