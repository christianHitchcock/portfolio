import  React, { useState } from "react";
import Navbar from "./menu";
import logo from "../images/logo.png"
import Myskill from "./skills";
import Footer from "./footer";
import { FaArrowCircleDown,FaArrowCircleRight } from "react-icons/fa";


const About = () => {
    const [HideContainer , ShowContainer] = useState(false);
    const [hideContainer , showContainer] = useState(false);
    const [hideExperience , showExperience] = useState(false);


    return (
        <>
        <Navbar/>
        <div className="aboutimg">
            <img src={logo} alt="" />
        </div>
        <div>
            <h1>Hello, I'm Christian.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
        <h2 onClick={() => showContainer(!hideContainer)}>History
                {hideContainer ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
       
                {hideContainer && <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>}
        <p></p>
        </div>
        <div>
        <h2 onClick={() => showExperience(!hideExperience)}>Experience 
                {hideExperience ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
       
                {hideExperience && <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>}
        <p></p>
        </div>
                    <div>
                    <h2 onClick={() => ShowContainer(!HideContainer)}>Skills
                {HideContainer ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
       
                {HideContainer && <div><Myskill/></div>}
                    </div>
                    <button>Download Resume</button>

                <Footer/>
        </>
    )
}

export default About;