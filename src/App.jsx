import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Book from "./components/Book/Book.jsx";
import Library from "./components/Library/Library.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import User from "./components/User/User.jsx";
import Home from "./components/Home/Home.jsx";

import "./index.css";

import Protected from "./components/Shared/Protected";

import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/*
          <Route path="/User" element={<Protected />}>
            */}
          <Route path="/User" element={<User />} />
          {/*}
          </Route>
          */}
          <Route path="/Library" element={<Library />} />
          <Route path="/Book/:id" element={<Book />}></Route>
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
