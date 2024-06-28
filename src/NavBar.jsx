import bookLogo from "./assets/old-books.jpg";
import { Link } from "react-router-dom";
import "./index.css";

// export default function NavBar() {
//   return (

//     <div>

//       <div id="navbar" className="NavBar"> 
     
//       <div class="navbar navbar-light" style="background-color: #e3f2fd;">
//         <Link to="/">Home</Link>
//       </div>

//         <Link to="/Login">Log In User</Link>
//         <Link to="/Register">Register User</Link>
//         <Link to="/User">User Profile</Link>
//         <Link to="/Library">Library</Link>
      
//       </div>

//      <div className="Image">
//       <img id="logo-image" src={bookLogo} /> 
//       <h1>LIBRARY APP</h1>
//       </div>

//     </div>

// );
// }


export default function NavBar () {
  return (
    <div>
    <div className="navbar">
     
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login">Log in User</Link>
        </li>
        <li className="nav-item">
          <Link to="/Register">Register User</Link>
        </li>
        <li className="nav-item">
          <Link to="/User">User Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/Library">Library</Link>
        </li>
      </ul>
 
 </div>

{/* /* <div className="Image"><img id="logo-image" src={bookLogo} /> <h1>LIBRARY APP</h1></div> */}
</div> 


);
};
