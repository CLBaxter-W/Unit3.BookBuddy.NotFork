import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "users/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem("Token", payload.token);

  console.log(`storeToken Register : ${state.token}`);
};

const registerSlice = createSlice({
  name: "register",
  initialState: {},
  reducers: {
    clearRegisterToken: (state) => {
      state.token = null;
      console.log(`clearRegisterToken: ${state.token}`);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export const { clearRegisterToken } = registerSlice.actions;

export default registerSlice.reducer;

export const { useRegisterMutation } = registerApi;
