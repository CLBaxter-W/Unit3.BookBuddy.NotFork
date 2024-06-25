import React from "react";

import Book from "../Book/Book";

export default function BookRow({ newBook }) {
  return (
    <tr
      onClick={() => {
        //TO DO - set selected book and go to page w/details
        console.log("You have selected Book:  ", newBook.id);
     }}
    >
      <td>{newBook.title}</td>
      <td>{newBook.author}</td>
      <td>{newBook.available ? "Yes" : "No"}</td>
    </tr>
  );
}
