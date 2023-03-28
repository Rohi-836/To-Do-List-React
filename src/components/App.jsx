import React, { useState } from "react";
const lists = [];
function App() {
  const [list, setList] = useState(lists);
  const [name, setName] = useState("");

  function addItem(event) {
    setName(event.target.value);
  }

  function onSubmit() {
    const newList = list.concat(name);
    setList(newList);
    setName("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={addItem}
          type="text"
          placeholder="Add To-Do"
          value={name}
        />
        <button onClick={onSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
