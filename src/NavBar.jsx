import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div id="navbar" className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/Login">Log In User</Link>
        <Link to="/Register">Register User</Link>
        <Link to="/User">User Profile</Link>
        <Link to="/Library">Library</Link>
        <Link to="/Logout">Logout</Link>
      </div>

      <div id="imageContainer">
        <img id="logo-image" src={bookLogo} />
        <h1>LIBRARY APP</h1>
      </div>
    </div>
  );
}
