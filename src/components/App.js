import React from "react";
import data from "../data/project.json";
import List from "./List/List";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={() => <List elts={data} />} />
      <Route path="/about" component={About} />
      <Route path={`/project/:id`} component={Project} />
    </div>
  </Router>
);

const About = () => <h2>About</h2>;
const Project = ({ match }) => <h3>Project : {match.params.id}</h3>;

const Header = () => (
  <ul>
    <li>
      <Link to="/">All projects</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default App;
