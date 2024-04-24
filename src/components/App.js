import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", select: 2, packed: false },
  { id: 2, description: "Socks", select: 12, packed: false },
];
export default function App() {
  let [item, setItem] = useState(initialItems);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClick() {
    // alert("Are you sure,you want to delete all", setItem([]));
    const confirm = window.confirm("Are you sure,you want to delete all");

    if (confirm) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} onDeleteItem={handleDeleteItem} />
      <PackingList
        items={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClick}
      />
      <Stats item={item} />
    </div>
  );
}
