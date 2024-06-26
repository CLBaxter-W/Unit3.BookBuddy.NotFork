// /* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//import { useState } from "react";

import { setBook, useGetBookQuery } from "./BookSlice";
import BookDetails from "./BookDetails";

export default function Book() {
  const { id } = useParams();

  const book = useSelector((state) => state.selectedBook);

  //const dispatch = useDispatch();
  //const temp = dispatch(useGetBookQuery(id));

  const temp = useGetBookQuery(id);
  console.log(temp);

  console.log(`isSuccess:  ${temp.isSuccess}`);
  if (temp && temp.isSuccess) {
    console.log(JSON.parse(temp.data).book);

    // setBook(JSON.parse(temp.data).book);
    console.log(" If Book-PriorToReturn");

    return (
      <section className="booksContainer">
        {JSON.parse(temp.data).book && (
          <BookDetails book={JSON.parse(temp.data).book} />
        )}
      </section>
    );
  } else {
    console.log("Else Book-PriorToReturn");

    return <div> Loading </div>;
  }
}
