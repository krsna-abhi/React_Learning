import react from "react";
import reactDom from "react-dom/client";

const root = document.getElementById("root");
const path = reactDom.createRoot(root);

/*
const reactElement = react.createElement(
  "h1",
  { id: "heading" },
  "tera bhai react paad raha hai",
);
*/

path.render(reactElement);

const jscReactElement = (
  <h1 id="heading">tera bhai react-js aur jsx paad raha hai</h1>
);

path.render(jscReactElement);
