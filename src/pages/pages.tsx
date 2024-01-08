import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Login, Signup } from "./index";
import { getFirebase } from "../firebase";
import { useEffect } from "react";

const { auth } = getFirebase();

export const Pages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser && window.location.pathname !== "/signup") {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      {" "}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />{" "}
    </Routes>
  );
};
