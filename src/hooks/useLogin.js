import { useState } from "react";
import useAuthHook from "./useAuthHook";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthHook();

  const login = async (email, password) => {
    setLoading(true);
    setError(null); // Reset the error state before starting the login process

    const apiUrl = "https://url-short-api-v2.vercel.app/api/v1/login";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const json = await response.json();
        console.log("Login successful:", json);
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json,"this is from use login")
        dispatch({ type: "LOGIN", payload: json});
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login };
};

export default useLogin;
