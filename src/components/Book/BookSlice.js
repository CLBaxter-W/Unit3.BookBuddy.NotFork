// import React from "react";

import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),

    // added for patch on books
    patchAvailability: builder.mutation({
      query: (id, available) => ({
        url: `/books/${id}`,
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ available: available }),
      }),
    }),
  }),
});

const bookSlice = createSlice({
  name: "book",
  initialState: {
    selectedBook: {},
  },

  reducers: {
    setBook: (state, { payload }) => {
      state.selectedBook = payload.book;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getBook.matchFulfilled,
      (state, { payload }) => {
        return payload;
      },
      api.endpoints.patchAvailability.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const { setBook } = bookSlice.actions;
export const selectSelectedBook = (state) => state.book.selectedBook;

export default bookSlice.reducer;

export const { useGetBookQuery, usePatchAvailabilityMutation } = bookApi;
