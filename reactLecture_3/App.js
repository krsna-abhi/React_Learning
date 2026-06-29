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
/*
const MyComponenet = () => {
  return (
    <div>
      <h1>tera bhai react-js aur jsx paad raha hai</h1>
      <p>tera bhai react-js aur jsx paad raha hai</p>
    </div>
  );
};

path.render(<MyComponenet />);
*/
/* this will be returned by the MyComponent functional component :
  <div>
    <h1>tera bhai react-js aur jsx paad raha hai</h1>
    <p>tera bhai react-js aur jsx paad raha hai</p>
  </div>
*/

/* assignment : --------------------------------------------------------------------
build nested header react elements with react.createElement()
solution >

const nestedReactElement = react.createElement(
  "div",
  { className: "title" },
  react.createElement("h1", { id: "headingOne" }, "main h1 element hun"),
  react.createElement("h2", { id: "headingTwo" }, "main h2 element hun"),
  react.createElement("h3", { id: "headingThree" }, "main h3 element hun"),
);
path.render(nestedReactElement);
*/

/* assignment : --------------------------------------------------------------------
build nested header react elements with react jsx syntax
solution >

const nestedReactElement = (
  <div className="title">
    <h1 id="headingOne">main h1 element hun</h1>
    <h2 id="headingTwo">main h2 element hun</h2>
    <h3 id="headingThree">main h3 element hun</h3>
  </div>
);
path.render(nestedReactElement);
*/

/* assignment : --------------------------------------------------------------------
functional componenet of nested header react elements with react jsx syntax
solution >

const NestedReactElement = () => {
  return (
    <div className="title">
      <h1 id="headingOne" className="box">
        main h1 element hun
      </h1>
      <h2 id="headingTwo" className="box">
        main h2 element hun
      </h2>
      <h3 id="headingThree" className="box">
        main h3 element hun
      </h3>
    </div>
  );
};
path.render(<NestedReactElement />);
*/

const TitleComponent = () => {
  return (
    <div className="box">
      <h1 id="title">lorem ipsum</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div className="box">
      <h2 id="heading">what is a react component ?</h2>
    </div>
  );
};

const ParagraphComponent = () => {
  return (
    <div className="box">
      <p id="paragraph">
        a react component is a js function that returns a react element
      </p>
    </div>
  );
};

const LoreaComponent = () => {
  return (
    <div className="box">
      <p id="lorem">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className="box">
      <TitleComponent />
      <HeadingComponent> </HeadingComponent>
      {<ParagraphComponent />}
      {/* More useful when conditionally rendering: {isVisible && <ParagraphComponent />} */}
      {LoreaComponent()}
      {/* not recommended because - react won't treat it as a proper component instance */}
    </div>
  );
};

path.render(<MainComponent />);
