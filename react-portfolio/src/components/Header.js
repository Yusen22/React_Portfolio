import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header style={{ backgroundColor: "green" }}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
