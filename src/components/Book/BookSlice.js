import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Book"],
    }),
  }),
});

const bookSlice = createSlice({
  name: "book",
  initialState: {
    selectedBook: {},
  },

  reducers: {
    setCurrentBook: (state, { payload }) => {
      (state.selectedBook = payload.selectedBook),
        console.log("in setCurrentBook: ", state.selectedBook);
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getLibrary.matchFulfilled,
      (state, { payload }) => {
        return JSON.parse(payload);
      }
    );
  },
});

export default bookSlice.reducer;
export const { useGetBookQuery } = bookApi;
export const { setCurrentBook } = bookSlice.actions;
export const selectedBook = (state) => state.book.selectedBook;
