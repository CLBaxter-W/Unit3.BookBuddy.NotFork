import React from "react";

export default function UserBookRow() {
  return (
    <div className="book-card">
      <div className="title">{newBook.title}</div>
      <div className="author">{newBook.author}</div>
      <div className="YN">Available: {newBook.available ? "Yes" : "No"}</div>
      <div id="details" className="details">
        <Link to={`/Book/${newBook.id}`}>See Details</Link>
      </div>

      <button
        type="button"
        className="btn"
        onClick={() =>
          console.log(
            `You would like to checkout ${currentBook.title} by ${currentBook.author}`
          )
        }
      >
        Checkout Book
      </button>
      <button
        type="button"
        className="btn"
        onClick={() =>
          console.log(
            `You would like to check in ${currentBook.title} by ${currentBook.author}`
          )
        }
      >
        Check In Book
      </button>
    </div>
  );
}
