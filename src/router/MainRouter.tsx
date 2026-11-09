import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../layout/UserLayout";
import TypeScriptBasics from "../pages/TypscriptBasics";
import TypescriptReact from "../pages/TypescriptReact";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} >
          </Route>
          <Route path="ts_basics" element={<TypeScriptBasics />} />
          <Route path="ts_react" element={<TypescriptReact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
