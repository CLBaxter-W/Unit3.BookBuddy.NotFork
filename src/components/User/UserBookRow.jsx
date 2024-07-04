import { useState } from "react";
import { usePatchAvailabilityMutation } from "../Book/BookSlice";
import { useDeleteReservationMutation } from "./UserReserveSlice";

export default function UserBookRow({ newBook }) {
  const [error, setError] = useState();

  const [checkBookOut] = usePatchAvailabilityMutation();
  const [checkBookIn] = useDeleteReservationMutation();

  // We need 2 different kinds of calls for availability management
  // IF the book is being checked out, we call PATCH /books/:bookId - the api handles
  // creating a reservation - associating the book to the currently logged
  // in user.   The reservation_id is what is stored in the users book list
  // IF the book is being checked in, we call DELETE /reservations/:reservationId
  // the api handles setting the book availability to true and removes the user/book
  // association
  //////
  // When this UserBookRow is created for the Library - the bookId is a bookId and check out occurs
  // When this UserBookRow is created for the UserDetails - the bookId is a reservationId and checkin occurs

  const setBookAvailability = async (e) => {
    e.preventDefault();

    console.log(
      `You would like to ${
        newBook.available ? "Check Book Out" : "Check Book In"
      } ${newBook.title} by ${newBook.author}`
    );

    try {
      let success = false;

      if (newBook.available) {
        // Using the book id, it checks out the book
        success = await checkBookOut(newBook.id, !newBook.available).unwrap();
      } else {
        // Using the reservationId, it checks in the book
        success = await checkBookIn(newBook.id);
      }

      if (success) {
        console.log("Success");
      }
    } catch (error) {
      console.log(error);
      setError(error.data.message);
    }
  };

  return (
    <div id="user-card">
      <div className="c">
        <div className="userBookRowButtons">
          <button
            type="button"
            className="button"
            onClick={setBookAvailability}
          >
            {newBook.available ? "Check Book Out" : "Check Book In"}
          </button>
          {error ? (
            <div className="Check In/Out Error">
              <br />
              <h5>{error} - Please refresh your screen.</h5>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
