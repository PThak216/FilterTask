import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const callmainpagee = async () => {
      try {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });
        navigate("/login");
        toast.error("Logout");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        console.warn(err.responseText);
      }
    };
    callmainpagee();
  });
  return (
    <div>
      {" "}
      <ToastContainer />
    </div>
  );
};

export default Logout;
