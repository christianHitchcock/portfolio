import React from "react";
import { Link} from '@chakra-ui/react'

import {  FaGithubSquare,FaInstagramSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import Navbar from "./menu";

import { Button} from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";


function  Profileimg() {
    return (
        <div className="profileimg">
           <img src={process.env.PUBLIC_URL + '/images/christian.jpg'} alt='facephoto' />

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
                    <p> Hello, I'm christian,a software Developer with a keen interest in exploring various technological solutions and frameworks,
                        I love combining the worlds of logic and creative design to make eye-catching, 
                        accessible, and user-friendly websites and applications. i pratice minimalism in photography , 
                        designs and my daily life . 
                        my personal values are growth , honesty , transparency, kindness & empathy.</p>
                       <div className="icons">
                        <Link href="https://github.com/christianHitchcock" isExternal  ><FaGithubSquare className="icon" /></Link>
                        <Link href= "https://www.instagram.com/christian__hitchcock" isExternal ><FaInstagramSquare className="icon"/></Link>
                        <Link href=" https://www.linkedin.com/in/christian-e-a99152183/" isExternal ><FaLinkedin className="icon"/></Link>
                        <Link href= "https://twitter.com/Theaftercolors" isExternal ><FaTwitterSquare className="icon"/></Link>  
                       </div>  
                       <Link href="/about"><Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            See More About Me
                        </Button></Link> 
                </div>
            </div>
        </header>
        </>
    )
}






export default Header;