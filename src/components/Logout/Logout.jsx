import { useDispatch } from "react-redux";
import { clearLoginToken } from "../Login/LoginSlice";
import { clearRegisterToken } from "../Register/RegisterSlice";

export default function Logout() {
  if (window.sessionStorage.getItem("Token")) {
    window.sessionStorage.removeItem("Token");
  }

  const dispatch = useDispatch();
  dispatch(clearRegisterToken());

  // TODO - solve this stack trace problem
  console.log("Error Clearing LOGIN Token in logout");
  dispatch(clearLoginToken());

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
