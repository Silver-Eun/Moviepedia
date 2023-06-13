import { useState } from "react";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelte, onEdit }) {
  const handleDeleteClick = () => {
    onDelte(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title}></img>
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content };
          return (
            <li key={item.id}>
              <ReviewForm initialValues={initialValues} initialPreview={imgUrl} onCancel={handleCancel} />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelte={onDelete} onEdit={setEditingId} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
