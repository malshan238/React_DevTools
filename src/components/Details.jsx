import React from "react";
import contacts from "../contacts";

function Details(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Details;
