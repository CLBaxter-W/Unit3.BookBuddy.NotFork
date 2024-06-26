// /* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";

import { useGetBookQuery } from "./BookSlice";
import BookDetails from "./BookDetails";

export default function Book() {
  const { id } = useParams();
  const theBook = useGetBookQuery(id);

  if (theBook && theBook.isSuccess) {
    return (
      <section className="booksContainer">
        {JSON.parse(theBook.data).book && (
          <BookDetails book={JSON.parse(theBook.data).book} />
        )}
      </section>
    );
  } else {
    return <div> Loading </div>;
  }
}
