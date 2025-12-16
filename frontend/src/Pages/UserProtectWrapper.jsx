import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";

function UserProtectWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectWrapper;
