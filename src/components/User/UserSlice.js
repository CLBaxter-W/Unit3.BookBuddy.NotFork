import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "users/me",
        method: "GET"
      }),
    }),
  }),
});

const storeCurrentUser = (state, { payload }) => {
  state.id = payload.id;
  state.firstname = payload.firstname;
  state.lastname = payload.lastname;
  state.email = payload.email;
  state.books = payload.books;
};

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    clearCurrentUser: (state) => {state.id = 0;
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.books = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      storeCurrentUser
      /* (state, { payload }) => {return JSON.parse(payload);} */
    );
  },
});

export const {
    clearCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;

export const { useGetUserQuery } = userApi;
