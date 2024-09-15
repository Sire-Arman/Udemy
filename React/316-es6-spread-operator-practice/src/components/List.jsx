import React, { useState } from "react";

export default function List(props) {
  const [stl, setStl] = useState(0);
  // function handlestyle() {
  //   setStl((prev) => {
  //     return !prev;
  //   });
  //}
  return (
    <div onClick={() => props.handleDelete(props.index)}>
      {/* <li style={{ textDecoration: stl ? "line-through" : "none" }}> */}
      <li>{props.item}</li>
    </div>
  );
}
