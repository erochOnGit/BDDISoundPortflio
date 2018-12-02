import React from "react";
import data from "../data/project.json";
import List from "./List/List";
import "./App.css";

let App = () => {
  return (
    <div>
      <List elts={data} />
    </div>
  );
};

export default App;
