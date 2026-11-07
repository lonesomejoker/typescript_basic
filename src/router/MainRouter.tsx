import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.tsx";
import Drinks from "../pages/Drinks.tsx";
import Home from "../pages/Home.js";
import Themes from "../pages/Themes.tsx";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
