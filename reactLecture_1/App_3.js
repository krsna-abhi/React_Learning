/* 
<div id="root">
  <div id="name">
    <div id="fname">first name</div> : krishna
    <div id="lname">last name</div> : rays
  </div>
  <div id="info">
    <div id="age">age</div> : 25
  </div>
</div>
*/

const root = document.getElementById("root");
const path = ReactDOM.createRoot(root);

// my react element
const myReactElement = React.createElement(
  "div",
  { id: "root" },
  React.createElement(
    "div",
    { id: "name" },
    React.createElement("div", { id: "fname" }, "first name"),
    " : krishna",
    React.createElement("div", { id: "lname" }, "last name"),
    " : rays",
  ),
  React.createElement(
    "div",
    { id: "info" },
    React.createElement("div", { id: "age" }, "age"),
    " : 25",
  ),
);

path.render(myReactElement); // React will clear that existing content of the <div id="root"> ..... /div> and replace it with the UI produced by your React component tree
/* if React did not replace or take control of the contents of #root, then there would be confusion like :
  - Which DOM nodes were created by React ?
  - Which ones were manually written in HTML ?
  - Which ones should React update ?
  - Which ones should it leave alone ?
React Doc says > React takes over managing the DOM inside the #root node, and on the first render it clears the existing HTML inside that root.
  - React keeps the container element <div id="root"> </div> and React replaces every children inside #root node
  - On the first render, React clears the root’s existing content or childrens and mounts its own UI there.
  - for later updates after that, React does not destroy everything blindly on every update.
    - React keeps track of the changes in the virtual DOM and only updates the parts of the DOM that have changed, which is more efficient than re-rendering the entire UI.
    in simple way, React uses a diffing algorithm
    - which is known as reconciliation process (the diffing logic where React compares old virtual tree vs new virtual tree) to figure out : 
      - what changed
      - what can stay
      - what should be updated
      - what should be removed
*/

/* 
React.createElement() takes 3 types of arguments :
  - first : element type, like > "div", "h1", MyComponent
  - second : props object, like > { id: "root", className: "box" }
  - third : childrens, like > strings, numbers, or more createElement() calls
*/

/*
problem with nested React.createElement() calls is - these calls are not readable and hard to maintain, especially when the component tree is deep and complex.
to solve this problem :
    - React introduced JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
    - JSX makes it easier to visualize component structure, improves code readability, and easy to maintain.
    - JSX is just syntactic sugar, nothing else
        - on top of JSX, Babel compiles every JSX tags into exact React.createElement() calls behind the scenes
*/
