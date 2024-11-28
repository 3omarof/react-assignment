import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SecFooter from "../SecFooter/SecFooter";

export default function Layout() {
  return <>
  <Navbar/>
 
    <Outlet></Outlet>
  
  <Footer/>
  <SecFooter/>
  </>;
}
