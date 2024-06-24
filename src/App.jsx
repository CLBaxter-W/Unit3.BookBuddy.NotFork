import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Library from "./components/Library/Library";
import Register from "./components/Register/Register";

import Navigations from "./Navigations";

function App() {
  return (
    <>
      <Navigations />
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/Register" element={<Register />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
