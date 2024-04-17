import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  let [description, setDescription] = useState("");
  let [select, setSelect] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);

    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item(item) {
  return (
    <li>
      <span style={item.item.packed ? { textDecoration: "line-through" } : {}}>
        {item.item.quantity} {item.item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list</em>
    </footer>
  );
}
