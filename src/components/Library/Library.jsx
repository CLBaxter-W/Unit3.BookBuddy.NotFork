/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import BookRow from "../Book/BookRow";

import { useGetLibraryQuery } from "./LibrarySlice";
import { useState, useEffect } from "react";

export default function Library() {
  const [library, setLibrary] = useState([]);
  const [filteredLibrary, setFilteredLibrary] = useState([]);
  const [filterForm, setFilterForm] = useState({
    filterInput: "a",
    filterType: "author",
  });

  const { data, isLoading, isSuccess, refetch } = useGetLibraryQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();

      setLibrary(data.books);

      // for use in filtering displayed book list
      setFilteredLibrary(data.books);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  const updateForm = (e) => {
    setFilterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFilterClick = (e) => {
    e.preventDefault();

    const regExp = new RegExp(
      filterForm.filterInput === ""
        ? `*[a-z]*`
        : `.*${filterForm.filterInput.toLowerCase()}*`,
      "i"
    );

    if (library) {
      switch (filterForm.filterType) {
        case "author":
          // Filter the main library and create matching array with any books that match
          setFilteredLibrary(
            library.filter((searchValue) => searchValue.author.match(regExp))
          );
          break;

        case "title":
          setFilteredLibrary(
            library.filter((searchValue) => searchValue.title.match(regExp))
          );
          break;

        case "availableYes":
          setFilteredLibrary(
            library &&
              library.filter((searchValue) => {
                return searchValue.available === true;
              })
          );
          break;
        case "availableNo":
          setFilteredLibrary(
            library &&
              library.filter((searchValue) => {
                return searchValue.available === false;
              })
          );
          break;
        default:
          // Filter is empty, reload whole list
          setFilteredLibrary(library);
      }
    }
  };

  return (
    <section className="booksListContainer">
      <form onSubmit={onFilterClick}>
        <div className="filterBooks">
          <label>Filter:</label>
          <select
            name="filterType"
            id="bookFilter"
            className="selectFilter"
            onChange={updateForm}
          >
            <option value="author"> by Author</option>
            <option value="title"> by Title</option>
            <optgroup label="By Availability">
              <option value="availableYes">Status: Available</option>
              <option value="availableNo">Status: Checked Out</option>
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
          {isSuccess &&
            filteredLibrary.map((book) => {
              return <BookRow key={book.id} newBook={book} />;
            })}
        </div>
      </div>
    </section>
  );
}
