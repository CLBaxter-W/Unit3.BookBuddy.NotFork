import { useDispatch } from "react-redux";
import { clearLoginToken } from "../Login/LoginSlice";
import { clearRegisterToken } from "../Register/RegisterSlice";
import { clearCurrentUser } from "../User/UserSlice";

export default function Logout() {
  const dispatch = useDispatch();

  
  // clear the current User
  dispatch(clearCurrentUser());
  dispatch(clearLoginToken());

  // Clear the register token
  dispatch(clearRegisterToken());

  if (window.sessionStorage.getItem("Token")) {
    window.sessionStorage.removeItem("Token");
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
