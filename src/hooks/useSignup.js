import { useState } from "react";
import useAuthHook from "./useAuthHook";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthHook();

  const Signup = async (username, email, password) => {
    setLoading(true);
    setError(null); // Reset the error state before starting the signup process

    const apiUrl = "https://url-short-api-v2.vercel.app/register";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ type: "SIGNUP", payload: json });
        localStorage.setItem("user", JSON.stringify(json));
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, Signup };
};

export default useSignup;
