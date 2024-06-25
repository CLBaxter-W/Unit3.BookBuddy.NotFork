import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";



const libraryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLibrary: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Library"],
    }),
  }),
});

const librarySlice = createSlice({
  name: "library",

  initialState: {
    bookList: [],
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

export default librarySlice.reducer;
export const { useGetLibraryQuery } = libraryApi;
