import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { getFirebase } from "../../firebase";
import { useNavigate } from "react-router-dom";

const { auth } = getFirebase();

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/signup");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <nav>
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};
