import Item from "./Item";
export default function Stats({ item }) {
  const numLength = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go ✈️"
          : `You have ${numLength} items in your list and you have already packed${" "}
        ${numPacked} { (${percentage}%)}`}
      </em>
    </footer>
  );
}
