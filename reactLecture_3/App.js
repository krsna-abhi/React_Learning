import react from "react";
import reactDom from "react-dom/client";

const root = document.getElementById("root");
const path = reactDom.createRoot(root);

// react element is a object which is created by react.createElement() function.
// It is used to create a virtual DOM element in React.
// it returns a js object, which represents the virtual DOM element and this virtual DOM element can be rendered
// into the actual DOM using ReactDOM package.

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
