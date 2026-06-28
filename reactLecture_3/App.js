import react from "react";
import reactDom from "react-dom/client";

const root = document.getElementById("root");
const path = reactDom.createRoot(root);

// react element : --------------------------------------------------------------------
/*
const reactElement = react.createElement(
  "h1",
  { id: "heading" },
  "tera bhai react paad raha hai",
);

path.render(reactElement);
*/

/*
  // variable holding a react element
const jscReactElement = (
  <h1 id="heading">tera bhai react paad raha hai</h1>
);

path.render(jscReactElement);

  // const myElement  = <h1>...</h1>   // lowercase = variable, used as {myElement}
  // const Heading = () => { ... }        // Capital = component, used as <Heading />
*/

// react functional component : --------------------------------------------------------------------
const MyComponenet = () => {
  return (
    <div>
      <h1>tera bhai react-js aur jsx paad raha hai</h1>
      <p>tera bhai react-js aur jsx paad raha hai</p>
    </div>
  );
};

path.render(<MyComponenet />);
/* this will be returned by the MyComponent functional component :
  <div>
    <h1>tera bhai react-js aur jsx paad raha hai</h1>
    <p>tera bhai react-js aur jsx paad raha hai</p>
  </div>
*/
