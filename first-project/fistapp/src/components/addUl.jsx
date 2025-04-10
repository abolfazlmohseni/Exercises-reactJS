import React from "react";

function AddUl(props) {
  return (
    <div className="listItem">
      <p className="cartText">user name: {props.name}</p>
      <p className="cartText">user lastName: {props.lastName}</p>
      <p className="cartText">user age: {props.age}</p>
    </div>
  );
}

export default AddUl;
