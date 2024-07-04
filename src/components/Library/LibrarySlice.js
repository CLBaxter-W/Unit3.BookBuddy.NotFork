import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const libraryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLibrary: builder.query({
      query: () => ({
        url: "books",
        method: "GET",
      }),
    }),
  }),
});

const librarySlice = createSlice({
  name: "library",

  initialState: {
    bookList: [],
  },

  reducers: {
    setBookList: (state, { payload }) => {

      // TO DO correct way to set array - this is not the correct way to set the array, it shares handle to content
      state.bookList = payload.books;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getLibrary.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const { setBookList } = librarySlice.actions;

export const selectBookList = (state) => state.book.bookList;

export default librarySlice.reducer;
export const { useGetLibraryQuery } = libraryApi;
