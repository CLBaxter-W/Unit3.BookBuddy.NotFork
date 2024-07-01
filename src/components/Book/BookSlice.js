// import React from "react";

import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
        //responseHandler: (response) => response.text(),
      }),
    }),
    
    // added for patch on books
    patchAvailability: builder.mutation({
      query: (id, availabilityChange) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: JSON.stringify({availability: availabilityChange}),
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
      console.log("setBook Reducer - payload: ", payload.book);
      state.selectedBook = payload.book;
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

export const { setBook } = bookSlice.actions;
export const selectSelectedBook = (state) => state.book.selectedBook;

export default bookSlice.reducer;

export const { useGetBookQuery, usePatchAvailabilityMutation } = bookApi;
