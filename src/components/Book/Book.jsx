// /* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { useGetBookQuery } from "./BookSlice";
import BookDetails from "./BookDetails";

export default function Book(newBook) {
  const { id } = useParams();
  const [book, setBook] = useState();

  // TODO should this be in useEffect?
  const { data, isSuccess } = useGetBookQuery(id);
  //  useEffect(() => {
  //    const { data, isSuccess } = useGetBookQuery(id);
  //  }, [id]);

  console.log(`Book with id ${id}`);

  if (isSuccess) {
    // TODO See what this "newBook" looks like
    setBook(JSON.parse(data).book);
    //setBook(JSON.parse(data));
    console.log(`the new current book just data:  ${data.book}`);
    console.log(`the new current book JSON:  ${JSON.parse(data).book}`);
    console.log(`the new current book:  ${book}`);
  }
  // TODO - no book info

  console.log("Book-PriorToReturn");
  return (
    <section className="booksContainer">{book && BookDetails(book)}</section>
  );
}
