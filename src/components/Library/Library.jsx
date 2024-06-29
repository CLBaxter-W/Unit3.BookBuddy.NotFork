/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import BookRow from "../Book/BookRow";

import { useGetLibraryQuery } from "./LibrarySlice";
import { useState } from "react";

export default function Library() {
  const [library, setLibrary] = useState(null);
  const { data, isSuccess } = useGetLibraryQuery();

  const onLoadClick = (e) => {
    e.preventDefault();

    if (isSuccess) {
      setLibrary(JSON.parse(data).books);
    }
  };

  return (
    <div className="welcome1">
      <section>
        <form onSubmit={onLoadClick}>
          <div className="bookSearchContainer">
            {/* TO DO ADD Search functionality */}
            <button name="loadBooks">Load Book List</button>
          </div>
        </form>

        {/* Create Headers for the list of books*/}
        <div>
          {/* <h1>Book List</h1> */}
          <table>
            <thead>
              <tr>
                <th colSpan="3">Book List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>Title</td>
              <td>Author</td>
              <td>Available</td> */}
              </tr>

              {/* Create Rows in the List of Books for each library Book*/}
              {library &&
                library.map((book) => {
                  return <BookRow key={book.id} newBook={book} />;
                })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
