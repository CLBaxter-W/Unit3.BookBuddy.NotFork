/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";

import Library from "./components/Library/Library.jsx";
import Register from "./components/Register/Register.jsx";

export default function Navigations() {
  return (
    <nav>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Link to="/Register">Register</Link>
      <Link to="/Library">Library</Link>
    </nav>
  );
}
