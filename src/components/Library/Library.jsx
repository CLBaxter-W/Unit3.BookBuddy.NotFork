/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import BookRow from "../Book/BookRow";


import { useGetLibraryQuery } from "./LibrarySlice";
import { useState } from "react";

export default function Library() {
  const [library, setLibrary] = useState(null);
  const [filteredLibrary, setFilteredLibrary] = useState(null);
  const [filterForm, setFilterForm] = useState({
    filterInput: "",
    filterType: "author",
  });

  const { data, isSuccess } = useGetLibraryQuery();

  const onLoadClick = (e) => {
    e.preventDefault();

    if (isSuccess) {
      setLibrary(JSON.parse(data).books);

      // for use in filtering displayed book list
      setFilteredLibrary(library);
    }
  };

  const updateForm = (e) => {
    setFilterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFilterClick = (e) => {
    e.preventDefault();

    // Create the search filter from the input field with a simple Regular Expression
    const filterInput = filterForm.filterInput;
    const filterType = filterForm.filterType;

    if (filterType === "author" && filterInput !== "") {
      //TODo - why do I need the '.' at the beginning - I get an error if its not there
      const regExp = new RegExp(`.*${filterInput.toLowerCase()}*`);

      // Filter the main library and create matching array with any books that match
      setFilteredLibrary(
        library &&
          library.filter((searchValue) =>
            searchValue.author.toLowerCase().match(regExp)
          )
      );
    } else if (filterType === "title" && filterInput !== "") {
      //TODo - why do I need the '.' at the beginning - I get an error if its not there
      const regExp = new RegExp(`.*${filterInput.toLowerCase()}*`);

      // Filter the main library and create matching array with any books that match
      setFilteredLibrary(
        library &&
          library.filter((searchValue) =>
            searchValue.title.toLowerCase().match(regExp)
          )
      );
    } // TODO - get filter on Available working
    else if (filterType === "availableYes") {
      // Filter the main library and create matching array with any books that match
      setFilteredLibrary(
        library &&
          library.filter((searchValue) => {
            return searchValue.available === true;
          })
      );
    } else if (filterType === "availableNo") {
      // Filter the main library and create matching array with any books that match
      setFilteredLibrary(
        library &&
          library.filter((searchValue) => {
            return searchValue.available === false;
          })
      );
    } else {
      // Filter is empty, reload whole list
      setFilteredLibrary(library);
    }

    console.log(`matches to filter: ${filteredLibrary}`);
  };

  return (
    <section className="booksListContainer">
      <form onSubmit={onLoadClick}>
        <div className="bookSearchContainer">
          <button className="loadBooks">Load Book List</button>
        </div>
      </form>
      <form onSubmit={onFilterClick}>
        <div className="filterBooks">
          <label>Filter:</label>
          <select name="filterType" id="bookFilter" onChange={updateForm}>
            <option value="author"> by Author</option>
            <option value="title"> by Title</option>
            <optgroup label="By Availability">
              <option value="availableYes">Yes</option>
              <option value="availableNo">No</option>
            </optgroup>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="filter"
            name="filterInput"
            onChange={updateForm}
          />
          <button name="filterBtn" type="submit">
            Filter
          </button>
        </div>
      </form>

      <div>
        {/* Create Rows in the List of Books for each library Book*/}
        <div className="pp">
          {filteredLibrary &&
            filteredLibrary.map((book) => {
              return <BookRow key={book.id} newBook={book} />;
            })}
        </div>
      </div>
    </section>
  );
}
