import { useNavigate } from "react-router-dom";

export default function UserDetails({ userProfile }) {
  const navigate = useNavigate();

  console.log("UserDetails");

  return (
    <div>
      <h1>The User</h1>
      <p> {userProfile.firstname}</p>
      <p> {userProfile.lastname}</p>
      <p> {userProfile.email}</p>
     {/* <p> {userProfile.books}</p> */}

{/*TODO checkin/checkout buttons */}


      <button type="button" className="btn" onClick={() => navigate("/Login")}>
        Back
      </button>
      {/* TODO Link to lost page*/}
      {/* <Link to="/*">Lost Page</Link>*/}
    </div>
  );
}
