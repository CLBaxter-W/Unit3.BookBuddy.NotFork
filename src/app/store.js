// add the store to manage state - borrowed structure from 
//unit_3_react/block_27C_redux_part_two/src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerReducer from "../components/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
