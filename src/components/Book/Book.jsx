/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useSelector, useDispatch } from "react-redux";
//import { useState } from "react";

import { useGetBookQuery } from "./BookSlice";
import { setCurrentBook } from "./BookSlice";

export default function Book(newBook) {
  //  const [book, setBook] = useState(null);
  const book = useSelector((state) => state.book);
  // TODO This needs to be "selected book"
  const { data, isSuccess } = useGetBookQuery(newBook.id);

  const dispatch = useDispatch();

  const onLoadClick = (e) => {
    e.preventDefault();

    if (isSuccess) {
      // TODO Validate this is the right Way to get the data
      //    setBook(JSON.parse(data));
      dispatch(setCurrentBook(JSON.parse(data)));
    }
  };

  return (
    <section className="booksContainer">
      <form onSubmit={onLoadClick}>
        <div className="bookSearchContainer">
          <button name="loadBookList">Load Book List</button>
        </div>
      </form>

      {/* Create the list of book data*/}
      <div>
        <h1>The Book</h1>
        <p> {book.title}</p>
        <p> {book.author}</p>
        <p> {book.description}</p>
        <p> {book.coverimage}</p>
        <p> {book.available ? "Yes" : "No"}</p>
      </div>
    </section>
  );
}
