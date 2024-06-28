import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "users/me",
        method: "GET",
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        return JSON.parse(payload);
      }
    );
  },
});

export default userSlice.reducer;

export const { useGetUserQuery } = userApi;
