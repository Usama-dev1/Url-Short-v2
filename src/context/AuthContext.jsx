import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
//use reducer initals state
const intialState = { data: '', isAuthenticated: false };
//use auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, data: action.payload, isAuthenticated: true };
    case "LOGIN":
      return { ...state, data: action.payload, isAuthenticated: true };
    case "LOGOUT":
            localStorage.removeItem("user");
      return { ...state, data: null, isAuthenticated: false };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, intialState);
    const [eurl, setEurl] = useState("");
  console.log("AuthContext: Current state", state);
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log("this is from authcontext file", user);
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        console.log(parsedUser)
        dispatch({...state, type: "LOGIN", payload: parsedUser });
      } catch (error) {
        dispatch({ type: "LOGOUT" });
      }
    } else {
      dispatch({ type: "LOGOUT" });
    }

  }, []);
  return (
    <AuthContext.Provider value={{state, dispatch,eurl,setEurl }}>
      {children}
    </AuthContext.Provider>
  );
};
