// add the store to manage state - borrowed structure from
//unit_3_react/block_27C_redux_part_two/src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerReducer from "../components/Register/RegisterSlice";
import libraryReducer from "../components/Library/LibrarySlice";
import { bookReducer } from "../components/Book/BookSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerReducer,
    library: libraryReducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
