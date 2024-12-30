import React from "react";
import { Home } from "./home";
import { Routes, Route, Link } from "react-router-dom";
export function Nav() {
  return (
    <div>
      Navigation <hr></hr>
      {/* <a href="/">Home</a>
      <a href="/Books">Books</a>
      <a href="/xyz">XYZ</a> */}
      {/* above href will load the page entirely and this can be avoided using link instead of href */}
      <Link to="/">Home</Link>
      <Link to="/Books">Books</Link>
      <Link to="/xyz">XYZ</Link>
      <Link to="/Login">Log In</Link>
    </div>
  );
}
