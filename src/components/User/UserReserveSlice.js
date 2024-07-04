// import React from "react";

import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => ({
        url: `/reservations/`,
        method: "GET",
      }),
    }),

    // added delete for reservation
    deleteReservation: builder.mutation({
      query: (id) => ({
        url: `/reservations/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

const userReserveSlice = createSlice({
  name: "reservation",
  initialState: {},

  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getReservations.matchFulfilled,
      (state, { payload }) => {
        return payload;
      },
      api.endpoints.deleteReservation.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default userReserveSlice.reducer;

export const { useGetReservationsQuery, useDeleteReservationMutation } =
  reservationApi;
