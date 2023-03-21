import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">All Posts</NavLink>
      <NavLink to="/form">Add new Post</NavLink>
    </nav>
  );
}
