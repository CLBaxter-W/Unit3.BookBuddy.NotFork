import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";

export default function Register() {
  const [error, setError] = useState();
  const [registerUser] = useRegisterMutation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
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
      success = await registerUser(form).unwrap();
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
    <div>
      <div className="reg1">
        <form onSubmit={submit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="firstNameHelp"
              placeholder="Enter first name"
              name="firstname"
              onChange={updateForm}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="lastNameHelp"
              placeholder="Enter last name"
              name="lastname"
              onChange={updateForm}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email@xxx.com"
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
          <div className="form-submit">
            <button type="submit">Register</button>

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
