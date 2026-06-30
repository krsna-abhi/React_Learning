import react from "react";
import reactDom from "react-dom/client";
import Header from "./components/Header";
import ItemComponent from "./components/ItemComponent";

const ApplicationLayout = () => {
  return (
    <div className="app">
      <Header />
      <ItemComponent />
    </div>
  );
};

const root = document.getElementById("root");
const path = reactDom.createRoot(root);
path.render(<ApplicationLayout />);
