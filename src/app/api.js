import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",

    prepareHeaders: (headers, { getState }) => {
      const sessionToken = window.sessionStorage.getItem("Token");

      const token =
        getState().register.token || getState().login.token || sessionToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});
