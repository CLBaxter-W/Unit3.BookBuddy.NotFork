// /* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useGetBookQuery } from "./BookSlice";
import BookDetails from "./BookDetails";

export default function Book() {
  const [theBook, setTheBook] = useState({});
  const { id } = useParams();

  //const theBook = useGetBookQuery(id);

  const { data, isLoading, isSuccess, refetch } = useGetBookQuery(id);

  useEffect(() => {
    if (isSuccess) {
      setTheBook(data.book);

      refetch();
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  //if (theBook && theBook.isSuccess) {
  if (isSuccess) {
    return (
      <section className="booksContainer">
        {theBook && <BookDetails book={theBook} />}
      </section>
    );
  } else {
    return <div> Loading </div>;
  }
}
