import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";

export default function Register() {
  const [registerUser] = useRegisterMutation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
    }
  };

  // TODO handle login errors
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="firstNameHelp"
            placeholder="Enter first name"
            name="firstName"
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
            name="lastName"
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
