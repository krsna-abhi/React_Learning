// here we are creating a h1 element in React using its React.createElement method
const titleElement = React.createElement("h1", null, "react to mast hai");
// but this titleElement aka our React element is not yet rendered on the web page,

// we need to use ReactDOM methods to render it on the web page
// first - we will get the root element from the html page
const rootElement = document.getElementById("root");
// second - we will use ReactDOM.createRoot() method to create a root \ connection \ portal \ path for our React element to be rendered within the <div id="root">root</div>
const path = ReactDOM.createRoot(rootElement); // here we are creating a path from our React app to the root element within the html page
// third - we will use .render() method on our path variable to render our React element titleElement within the root element of the html page
path.render(titleElement);

// React App --> React-DOM Bridge --> Virtual Element --> Actual DOM Node --> web page ( root element within the html page )

// react element is a js object, its ReactDOM.render() method turning that js object into an actual DOM node and then rendering it within root div element of the html page.
// React-DOM is a bridge between React and the actual DOM node of the web page. React-DOM is responsible for rendering React elements into the actual DOM nodes of the web page.
