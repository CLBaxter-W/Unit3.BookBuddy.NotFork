import { useNavigate } from "react-router-dom";
import BookRow from "./UserBookRow";

export default function UserDetails({ userProfile }) {
  const navigate = useNavigate();

  console.log("UserDetails");

  return (
    <div className="user1">
      <form>
        <h3>User Details</h3>
        <div className="form-group">
          <label>First Name: </label>
          <label>{` ${userProfile.firstname}`}</label>
          <br />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <label>{` ${userProfile.lastname}`}</label>
          <br />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <label> {` ${userProfile.email}`}</label>
          <br />
        </div>

        <div className="form-group">
          <label>Current Books:</label>
          {/* <p> {userProfile.books}</p> */}

          {/* books that are currently checked out*/}
          <div className="pp">
            {userProfile.books &&
              userProfile.books.map((book) => {
                return <BookRow key={book.id} newBook={book} />;
              })}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => navigate("/Login")}
          >
            Back to Login
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => navigate("/Logout")}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
