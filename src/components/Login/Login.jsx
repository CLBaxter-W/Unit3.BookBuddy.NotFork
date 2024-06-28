import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";

export default function Login() {
  
  const [error, setError] = useState();
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      let success = false;
      success = await loginUser(form).unwrap();

      if (success) {
        navigate(`/User`);
      }
    } catch (error) {
      console.log(error);
      setError(error.data.message);
    }
  };

  // TODO handle login errors
  return (
    <div id="loginContainer">
      <div className="login1">
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Username (email) </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="userNameHelp"
              placeholder="Enter Username"
              name="email"
              onChange={updateForm}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={updateForm}
            />
          </div>
          {/* Button here must be "type="submit" so it correctly proceeds */}
          {/* to the callback to register the new user*/}
          <button type="submit">Login</button>
          {error ? (
            <div className="loginError">
              <br />
              <h5>{error} - Please check your input and try again.</h5>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
