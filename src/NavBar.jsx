// import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";
import "./index.css";
// import { FaHome } from "react-icons/fa";


export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="cont">
          <div className="nav-menu">
            <div className="nav-item">
            {/* <div className="input-icon">
            <i className="FaLock"></i>  */}
              <Link to="/">Home</Link>

            {/* </div> */}
</div>
            <div className="nav-item">
              <Link to="/Login">Log in User</Link>
            </div>

            <div className="nav-item">
              <Link to="/Register">Register User</Link>
            </div>

            <div className="nav-item">
              <Link to="/User">User Profile</Link>
            </div>

            <div className="nav-item">
              <Link to="/Library">Library</Link>
            </div>

            <div className="nav-item">
              <Link to="/Logout">Logout</Link>
            </div>
              

            <div className="nav-item">
              <Link to="/search">search</Link>
            </div>v

{/* <div className="Search">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" ></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div> */}


            
          </div>
        </div>
      </div>

      <div className="app">LIBRARY APP</div>

      {/* <div className="image"><img id="logo-image" src={bookLogo} /> <h1>LIBRARY APP</h1></div> */}
    </div>
  );
}
