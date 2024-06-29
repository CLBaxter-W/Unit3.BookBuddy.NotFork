import { useNavigate } from "react-router-dom";

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
          <label>Books:</label>
          {/* <p> {userProfile.books}</p> */}
          <div>
            {/* <h1>Book List</h1> */}
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Book List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>Title</td>
              <td>Author</td>
              <td>Available</td> */}
                </tr>

                {/* Create Rows in the List of checked out books for each library Book*/}
                {/*userProfile.books &&
                  userProfile.books.map((book) => {
                    return <UserBookRow key={book.id} newBook={book} />;
                  })*/}
              </tbody>
            </table>
          </div>
          <br />
        </div>

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
        {/*TODO checkin/checkout buttons */}
      </form>
    </div>
  );
}
