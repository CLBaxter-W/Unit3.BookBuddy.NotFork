import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: credentials,
      }),
      invalidateTags: ["User"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;

  console.log(`storeToken Login : ${state.token}`);
};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export default loginSlice.reducer;

export const { useLoginMutation } = loginApi;
