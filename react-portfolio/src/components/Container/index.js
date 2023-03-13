import React from "react";
// import "./style.css";

function Container(props) {
  return <div id={props.id} className="container-fluid">{props.children}</div>;
}

export default Container;
