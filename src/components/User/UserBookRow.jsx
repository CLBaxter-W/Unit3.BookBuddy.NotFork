import React from "react";

export default function UserBookRow() {
  return (
    <tr
      onClick={() => {
        //TO DO - set selected book and go to page w/details
        console.log("You have selected Book:  ", currentBook.id);
      }}
    >
      <td className="title">{currentBook.title}</td>
      <td>{currentBook.author}</td>
      <td>{currentBook.available ? "Available: Yes" : "Available:No"}</td>
      <td>
        <Link to={`/Book/${currentBook.id}`}>See Details</Link>
      </td>
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
    </tr>
  );
}
