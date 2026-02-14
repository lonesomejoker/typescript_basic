import React, { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button setCount={setCount}>Click Here</Button>
    </div>
  );
};

export default Home;
