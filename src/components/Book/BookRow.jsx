import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import UserBookRow from "../User/UserBookRow";

export default function BookRow({ newBook }) {
  // Determine if we are logged in.
  const sessionToken = window.sessionStorage.getItem("Token");

  return (
    <div className="book-card">
      <div className="title">{newBook.title}</div>
      <div className="author">{newBook.author}</div>
      <div className="YN">
        Status: {newBook.available ? "Available" : "Checked Out"}
      </div>
      <div className="pp">
        {/* Only show a button here if someone is logged in and the book can be checked out.   
        To check-in a book, use the UserDetails View*/}
        {sessionToken && newBook.available && (
          <UserBookRow key={newBook.id} newBook={newBook} />
        )}
      </div>
      <div id="details" className="details">
        <Link to={`/Book/${newBook.id}`}>See Details</Link>
      </div>
    </div>
  );
}
