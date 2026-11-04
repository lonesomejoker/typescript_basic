import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRouter, { router } from "./router/MainRouter.tsx";

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  createRoot(rootElement).render(
    createElement(StrictMode, null, createElement(MainRouter))
  );
}

export { MainRouter, router };
export default MainRouter;

