import React from "react";

import { Link } from "react-router-dom";

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
      <td>
        <Link to={`/Book/${newBook.id}`}>See Details</Link>
      </td>
    </tr>
  );
}
