import React, { useState } from "react";

export default function AddItem(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    props.setList((prev) => {
      return [...prev, input];
    });
    setInput("");
  }

  
  return (
    <div className="form">
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}
