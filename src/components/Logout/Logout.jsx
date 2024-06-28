// import { useSelector } from "react/redux";
// import { Register } from "../Register/Register";
// import { Login } from "../Login/Login";

export default function Logout() {
  /*
    const registerToken = useSelector((state) => state.Register.token);
    const loginToken = useSelector((state) => state.Login.token);
    */

  console.log("Logging Out");

  if (window.sessionStorage.getItem("Token")) {
    // window.sessionStorage.removeItem("Token");
    console.log("clearing session token");
  }

  return (
    <div id="logoutContainer">
      <div className="login1">
        <form>
          <h5> Thank you for visiting our library, please come again. </h5>
        </form>
      </div>
    </div>
  );
}
