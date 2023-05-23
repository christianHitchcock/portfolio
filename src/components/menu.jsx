import React,{useState} from "react";
import { FaTimes,FaCloudDownloadAlt } from "react-icons/fa";
import {FiMenu} from "react-icons/fi"
import {CiCoffeeCup} from "react-icons/ci"


const Navbar = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    const d = new Date();
    let day = weekday[d.getDay()];

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <div className="form-inline ml-auto">
                                <p>{day}</p>
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <FiMenu color="white"/>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Menu</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><FaTimes color="black"/></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link" href="about">Home</a></li>
                                <li><a className="sd-link" href="about">About</a></li>
                                <li><a className="sd-link" href="about">Projects</a></li>
                                <li><a className="sd-link" href="about">Contact</a></li>
                                <li><a className="sd-link" href="about"  id="download"><FaCloudDownloadAlt color="black"/> Download Resume</a></li>
                                <li><a className="sd-link" href="about" id="coffee"><CiCoffeeCup color="black"/> Buy me a coffee</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    )
}


export default Navbar;

