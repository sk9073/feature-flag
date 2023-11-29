import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.page";
import Login from "./pages/login.page";
import Home from "./pages/home.page";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {" "}
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
