import React from "react";

export default function Sidebar(props) {
  const btn = props.boxName.map((box) => {
    return (
      <div className="toggle">
        <span>{box.titel}</span>
        <label className="toggle-control">
          <input type="checkbox" checked={props.activeCoded.includes(box.id)} />
          <span
            className="control"
            onClick={(e) => {
              props.event(box.id);
            }}
          ></span>
        </label>
      </div>
    );
  });
  return <div>{btn}</div>;
}
