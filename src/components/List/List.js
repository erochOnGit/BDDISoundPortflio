import React from "react";
import { compose, mapProps, withState /* ... */ } from "recompose";
import "./List.css";

let List = ({ elts }) => {
  return (
    <div className="list">
      {elts.map((elt, index) => {
        return <div key={index}>{elt.title}</div>;
      })}
    </div>
  );
};

export default List;
