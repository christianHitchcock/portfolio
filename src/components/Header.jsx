import React from "react";
import { Link} from '@chakra-ui/react'
import {  FaGithubSquare,FaInstagramSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import  christian from "../images/christian.jpg"
import Navbar from "./menu";

function  Profileimg() {
    return (
        <div className="profileimg">
            <img src={christian}  alt="facephoto" />
        </div>
    )
}

function Header () {
   

    return(
        <>
        <header>
               <Navbar/>
            <div>
                <Profileimg className="animate-scroll"/>
              
                <div className="heading scroll-in">
                    <h1>SOFTWARE DEVELOPER,
                        DIGITAL CREATOR.
                    </h1>
                    <p>I'm christian,a software engineer with a focus on the frontend development,
                         but still exploring other technologies and frameworks that catch my interest! 
                        I love combining the worlds of logic and creative design to make eye-catching, 
                        accessible, and user-friendly websites and applications.</p>
                       <div className="icons">
                        <Link href="https://github.com/christianHitchcock" isExternal color='white' ><FaGithubSquare className="icon" /></Link>
                        <Link href= "https://www.instagram.com/christian__hitchcock" isExternal color='white'><FaInstagramSquare className="icon"/></Link>
                        <Link href=" https://www.linkedin.com/in/christian-e-a99152183/" isExternal color='white'><FaLinkedin className="icon"/></Link>
                        <Link href= "https://twitter.com/Theaftercolors" isExternal color='white'><FaTwitterSquare className="icon"/></Link>  
                       </div>         
                </div>
            </div>
        </header>
        </>
    )
}






export default Header;