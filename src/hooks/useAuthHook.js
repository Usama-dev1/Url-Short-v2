import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { state, dispatch, eurl, setEurl } = context;
  const { data, isAuthenticated } = state;
  return { data, isAuthenticated, dispatch,eurl,setEurl };
};

export default useAuth;
