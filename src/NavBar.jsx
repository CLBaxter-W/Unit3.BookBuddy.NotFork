import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">


      <div className="NavBar">
      <nav>
      
        <Link to="/">Home</Link>
        <Link to="/Register">Register User</Link>
        <Link to="/User">User Profile</Link>
        <Link to="/Library">Library</Link>
      </nav>
      </div>

      <nav>
      <img id="logo-image" src={bookLogo} /> 
      <h1>LIBRARY APP</h1>
      </nav>
    </div>
  );
}