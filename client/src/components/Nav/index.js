import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div clas='stayleft'>
      
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
     </div>
    </nav>
  );
}

export default Nav;
