import React from "react";

export default function Boxses(props) {
  const box = props.boxName.map((box) => {
    if (props.activeCoded.includes(box.id)) {
      return <div className="box">{box.titel}</div>;
    }
  });
  return <div className="boxses">{box}</div>;
}
