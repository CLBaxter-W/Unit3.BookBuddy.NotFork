// add the store to manage state - borrowed structure from
//unit_3_react/block_27C_redux_part_two/src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import loginReducer from "../components/Login/LoginSlice";
import registerReducer from "../components/Register/RegisterSlice";
import userReducer from "../components/User/UserSlice";
import libraryReducer from "../components/Library/LibrarySlice";
import bookReducer from "../components/Book/BookSlice";
import reserveReducer from "../components/User/UserReserveSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
    library: libraryReducer,
    book: bookReducer,
    reserve: reserveReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
