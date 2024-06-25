/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <nav>
        <img id="logo-image" src={bookLogo} /> Library App
      </nav>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Register">Register User</Link>
        <Link to="/User">User Profile</Link>
        <Link to="Library">Library</Link>
      </nav>
    </div>
  );
}
