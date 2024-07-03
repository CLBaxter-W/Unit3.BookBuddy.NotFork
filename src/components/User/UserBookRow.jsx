import { useState } from "react";
import { usePatchAvailabilityMutation } from "../Book/BookSlice";

export default function UserBookRow({ newBook }) {
  const [error, setError] = useState();

  const [changeAvailability] = usePatchAvailabilityMutation();

  // TODO - all the checkin/checkout calls

  // Do we just check book in or out regardless of who its attached to?
  //  OR
  // 2 calls to be made -
  //   1 to check out book (boolean and book id),
  //   1 attach book to user

  const setBookAvailability = async (e) => {
    e.preventDefault();

    console.log(
      `You would like to ${
        newBook.available ? "Check Book Out" : "Check Book In"
      } ${newBook.title} by ${newBook.author}`
    );

    try {
      let success = false;

      // Using the book id, reverse its availability
      success = await changeAvailability(newBook.id, !newBook.available);

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
