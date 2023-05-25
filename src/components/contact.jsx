import  React from "react";
import Navbar from "./menu";
import logo from "../images/logo.png";


const Contact = () => {
    


    return (
        <div className="container">
             <Navbar/>
             <div className="aboutimg">
            <img src={logo} alt="" />
        </div>
        </div>
    )
}

export default Contact;