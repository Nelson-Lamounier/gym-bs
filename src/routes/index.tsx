import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Navigation from "./navigation/navigation.component";
import ProfilePageHeader from "../component/profile/profile.component";
import Home from "./home/home.component";
import ContactUs from "../component/contact/contact-us.component";
import Footer from "../component/footer/footer.component";


// sections for this page


const Index: React.FC = () => {
    useEffect(() => {
      // Add classes to the body
      document.body.classList.add("index-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
  
      // Reset scroll position
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
  
      // Cleanup function to remove classes when component unmounts
      return () => {
        document.body.classList.remove("index-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []); // Dependency array ensures this effect runs only once on mount/unmount
  return (
    <>
      <div className="wrapper">

        <div className="main">
        <Home />
        </div>
       <ContactUs/>
       <Footer/>
      </div>
      <Outlet />
    </>
  );
}

export default Index;
