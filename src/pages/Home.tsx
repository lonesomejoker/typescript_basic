import { useState } from "react";
import Button from "../components/Button";
import AddToDo from "../components/AddTodo";
import Todos from "../components/Todos";
import Tabs from "../components/Tabs";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-col justify-center">
      <Button setCount={setCount}>Click Here</Button>
      <Tabs />
      <AddToDo />
      <Todos />
    </div>
  );
};

export default Home;
