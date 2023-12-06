import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Login, Signup } from "./index";
import { getFirebase } from "../firebase";
import { useEffect } from "react";

const { auth } = getFirebase();

export const Pages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      {" "}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />{" "}
    </Routes>
  );
};
