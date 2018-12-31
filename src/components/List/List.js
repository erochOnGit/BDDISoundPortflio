import React from "react";
import { compose, mapProps, withState /* ... */ } from "recompose";
import { Link } from "react-router-dom";
import "./List.css";

let List = ({ elts }) => {
  return (
    <div className="list">
      {elts.map((elt, index) => {
        return (
          <div key={index}>
            <Link to={`/project/${elt.title}`}>{elt.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
