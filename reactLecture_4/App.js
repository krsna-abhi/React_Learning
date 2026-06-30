import react from "react";
import reactDom from "react-dom/client";
import Header from "./components/Header";

const ApplicationLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = document.getElementById("root");
const path = reactDom.createRoot(root);
path.render(<ApplicationLayout />);
