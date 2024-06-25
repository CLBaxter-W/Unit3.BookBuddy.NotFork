import React from "react";

import Book from "../Book/Book";
import { setCurrentBook } from "./BookSlice";

export default function BookRow({ newBook }) {
  return (
    <tr
      onClick={() => {
        //TO DO - set selected book and go to page w/details
        console.log("You have selected Book:  ", newBook.id);

        setCurrentBook(newBook);
      }}
    >
      <td>{newBook.title}</td>
      <td>{newBook.author}</td>
      <td>{newBook.available ? "Yes" : "No"}</td>
    </tr>
  );
}
