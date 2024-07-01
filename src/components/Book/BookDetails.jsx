import { useNavigate } from "react-router-dom";
import React from "react";

export default function BookDetails({ book }) {
  const navigate = useNavigate();

  return (
    <div className="books">
      <div className="book.title">
        <p className="p1"> {book.title}</p>
      </div>
      <div className="book.author">
        <p className="p2"> {book.author}</p>
      </div>
      <div className="book.description">
        <p className="p3"> {book.description}</p>
      </div>
      <img src={book.coverimage} alt={book.title} className="img" />
      <p> Available: {book.available ? "Yes" : "No"}</p>

      <button
        type="submit"
        className="btn"
        onClick={() => navigate("/Library")}
      >
        Back
      </button>
      {/* TODO Link to lost page*/}
      {/* <Link to="/*">Lost Page</Link>*/}
    </div>
  );
}
