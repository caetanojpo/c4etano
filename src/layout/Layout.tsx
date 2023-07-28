import { Outlet, useLocation } from "react-router-dom";
import HomeNavbar from "../components/navigation/HomeNavbar/HomeNavbar";
import Navbar from "../components/navigation/Navbar";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/" ? <HomeNavbar /> : <Navbar />}
      <Outlet />
    </>
  );
}
