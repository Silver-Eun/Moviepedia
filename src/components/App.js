import { getReviews } from "../api";
import ReviewList from "./ReviewList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState(["createdAt"]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <button onClick={handleNewestClick}>Newest</button>
      <button onClick={handleBestClick}>Best</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>Load</button>
    </div>
  );
}

export default App;
