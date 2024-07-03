import { useNavigate } from "react-router-dom";
//import BookRow from "./UserBookRow";
import UserBookList from "./UserBookList";

export default function UserDetails({ userProfile }) {
  const navigate = useNavigate();

  return (
    <div className="user1">
      <form>
        <h3>User Details</h3>
        <div className="">
          <label>First Name: </label>
          <label>{` ${userProfile.firstname}`}</label>
          <br />
        </div>
        <div className="">
          <label>Last Name:</label>
          <label>{` ${userProfile.lastname}`}</label>
          <br />
        </div>

        <div className="">
          <label>Email:</label>
          <label> {` ${userProfile.email}`}</label>
          <br />
        </div>

        <div className="">
          <label>Current Books:</label>
          {/* <p> {userProfile.books}</p> */}

          {/* books that are currently checked out*/}
          <div className="">
            {userProfile.books && <UserBookList bookList={userProfile.books} />}
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
