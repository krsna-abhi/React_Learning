import react from "react";
import reactDom from "react-dom/client";

const root = document.getElementById("root");
const path = reactDom.createRoot(root);

const reactElement = react.createElement(
  "h1",
  { id: "heading" },
  "tera bhai react paad raha hai",
);

path.render(reactElement);
