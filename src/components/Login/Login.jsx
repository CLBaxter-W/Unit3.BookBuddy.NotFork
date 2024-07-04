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

      // Only returns message and token with this call
      // described API includes user info, but I don't find them
      // https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/#-post-api-users-login-
      success = await loginUser(form).unwrap();

      if (success) {
        console.log(success, `login`);

        navigate(`/User`);
      }
    } catch (error) {
      setError(error.data.message);
    }
  };

  // TODO handle login errors
  return (
    <div>
      <div className="form-group1">
        <form onSubmit={submit}>
          <div className="">
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
          <div className="">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={updateForm}
            />
          </div>
          <div>
            {/* Button here must be "type="submit" so it correctly proceeds */}
            {/* to the callback to register the new user*/}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {error ? (
              <div className="loginError">
                <br />
                <h5>{error} - Please check your input and try again.</h5>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
