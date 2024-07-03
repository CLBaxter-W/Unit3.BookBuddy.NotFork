import React from "react";
import UserBookRow from "./UserBookRow";

export default function UserBookListRow({ newBook }) {
  const sessionToken = window.sessionStorage.getItem("Token");

  return (
    <tr>
      <td>{newBook.title}</td>
      <td>{newBook.author}</td>
      <td>
        {/* Only show a button here if someone is logged in and the book can be checked in.   
           Truly the only books here should get the button as 
           they are all checked out to this user
        To check-out a book, we use the Library View */}
        {sessionToken && !newBook.available && (
          <UserBookRow newBook={newBook} />
        )}
      </td>
    </tr>
  );
}
