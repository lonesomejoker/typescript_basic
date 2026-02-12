import Button from "./components/Button";
import { Button2 } from "./components/Button2";
import { Input } from "./components/Input";

function App() {
  let url = "https://www.google.com";

  const onClick = (test:string) => {
    return 5;
  }
  return (
    <div>
      <h1 className=" text-5xl text-red-500 text-center ">Hello Shirish</h1>
      <button className=" px-4 py-2 rounded-xl bg-blue-500">Search</button>
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
      <Input
        style={{ backgroundColor: "red", margin: "10px", padding: "10px" }}
      />
      <Button2 style={{ color: "red", margin: "10px", padding: "10px" }} onClick={onClick} />
    </div>
  );
}

export default App;
