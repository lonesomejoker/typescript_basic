import { useState } from "react";
import React from "react";
import { useTodos } from "../store/todos";
const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo, todos } = useTodos();
  console.log("data:", todos);

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit} className=" mx-auto  w-[45%]">
      <div className=" flex justify-center items-center h-fit">
        <input
          className="border border-gray-300 px-4 py-2 rounded-md flex-1 "
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-green-400 text-white px-4 py-2.5 rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddToDo;
