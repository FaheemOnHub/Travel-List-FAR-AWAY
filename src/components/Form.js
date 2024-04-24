import { useState } from "react";
export default function Form({ onAddItem }) {
  let [description, setDescription] = useState("");
  let [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setSelect(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for this trip?</h3>
      <select
        value={select}
        onChange={(e) => {
          setSelect(Math.trunc(e.target.value));
          // console.log(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* in array.from the first (value,index) */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
