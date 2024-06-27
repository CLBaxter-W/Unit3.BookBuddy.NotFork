import { useNavigate } from "react-router-dom";

export default function UserDetails({ userProfile }) {
  const navigate = useNavigate();

  console.log("UserDetails");

  return (
    <div className="user1">
      <form>
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
          <label>Books:</label>
          {/* <p> {userProfile.books}</p> */}
          <br />
        </div>

        <button
          type="button"
          className="btn"
          onClick={() => navigate("/Login")}
        >
          Back
        </button>
        {/*TODO checkin/checkout buttons */}
      </form>
    </div>
  );
}
