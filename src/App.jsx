import Mainlayout from "./layouts/Mainlayout";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Contactpage from "./pages/Contactpage";
import Dashboard from "./pages/Dashboard";
import TableArea from "./components/TableArea";
import useAuthHook from "./hooks/useAuthHook";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import HeroArea from "./components/HeroArea";
import Dashboardlayout from "./layouts/Dashboardlayout";
import Aboutuspage from "./pages/Aboutuspage";
import Page404 from "./pages/Page404";

const App = () => {
  const { isAuthenticated } = useAuthHook();
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutuspage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="*" element={<Page404/>} />

        <Route
          path="/dash"
          element={
            isAuthenticated ? <Dashboardlayout/> : <Navigate to="/login" replace />
          }>        
          <Route index element={<Dashboard/>} />
          <Route path="short" element={<HeroArea />} />
          <Route path="urls" element={<TableArea />} />
        </Route>

        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dash" replace /> : <Loginpage />
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/dash" replace /> : <Signuppage />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
