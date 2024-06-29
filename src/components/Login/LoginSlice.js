import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem("Token", payload.token);

  console.log(`storeToken Login : ${state.token}`);
};

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    clearLoginToken: (state) => {
      state.token = null;
      console.log(`clearLoginToken: ${state.token}`);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
  },
});

export const { clearLoginToken } = loginSlice.actions;

export default loginSlice.reducer;

export const { useLoginMutation } = loginApi;
