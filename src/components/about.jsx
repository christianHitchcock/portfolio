import  React, { useState } from "react";
import Navbar from "./menu";
import Otherskills from "./otherskills";
import Myskill from "./skills";
import Footer from "./footer";
import { FaArrowCircleDown,FaArrowCircleRight,FaCloudDownloadAlt } from "react-icons/fa";




const About = () => {
    const [HideContainer , ShowContainer] = useState(false);
    const [hideContainer , showContainer] = useState(false);
    const [hideExperience , showExperience] = useState(false);
    const [hideSkills , showSkills] = useState(false);

    return (
        <div className="container">
        <Navbar/>
        <div className="aboutimg">
        <img src={process.env.PUBLIC_URL + '/images/christian.jpg'} alt='facephoto' />
        </div>
        <div className="about-contents">
            <h1>Hello, I'm Christian.</h1>
          
            <p>I'm extremely passionate about technology and design. I specialize in frontend programming, creating elegant user interfaces and websites. I also offer photography, video editing, and graphic design services.</p>
        </div>
        <div>
        <h2 onClick={() => showContainer(!hideContainer)}>History
                {hideContainer ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
       
                {hideContainer && <div className="about-contents" >
                    <p>
                        Following unsuccessful attempts to pursue computer science in university. I made the decision to give it another try and pursue my passion for technology.
                       I graduated with a good degree from the department of geography and environmental management. 
                        However, I continued to be interested in computer-related issues. During the lockdown due to Covid-19 pandemic I worked for a Wi-Fi company as a network operation intern. 
                       learned about the internet of things. fell in love with technology. I was able to restart my tech career because of my interest in IoT and smart devices.
                       I completed some iot classes on YouTube and reached the section where I had to figure out how to write with Python and the Raspberry Pi.
                       At that point, I made the decision to enroll in a boot camp and learn how to program.
                        without any prior programming experience, without any instructions or mentors. 
                        There was no one I could turn to for any useful information, so I made the biggest choice of my life.
                         I relocated to a new place and began my tech career.
                       I gained programming and website development skills using php, HTML, and CSS.
                       A few websites were developed before I finally learnt Python. developing more projects with Kivy and Tinkita.
                       Upon completing this boot camp. I volunteered to teach a few new students whilst learning a lot. I was still unsure about what to do next. 
                       I started looking for guidance from mentors and senior engineers when I was still locked in tutorial hell.  
                       I made the decision to study JavaScript after receiving instruction from a mentor. Obtaining a contract to create a website on the side
                        Without any prior understanding of WordPress, I built and developed this website.
                       I used my earnings from this employment to pay for a full stack development course by Angela Yu on Udemy. This course really opened my eyes.
                        This course improved my knowledge of JavaScript, node.js, react.js, databases, and other topics.
                       i started building more projects with MERN stack .  then  Focused my attention on frontend development and designs.
                        Built several projects from frontend mentor and still building.
                        Got a few friends from twitter and we started building projects together and communicating through WhatsApp and discord. 
                        This have given me better experiences and I have gotten better at programming. Studying and practicing everyday
                         I love creating and building stuffs.
                       Thanks for reading 😊</p>
                    </div>}
        </div>
        <div>
        <h2 onClick={() => showExperience(!hideExperience)}>Experience 
                {hideExperience ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
       
                {hideExperience && <div id="expBox">
                    <h3>POSITION :<p> Web developer</p> </h3>
                    <h3>COMPANY :<p>Zavion Technologies</p></h3>
                    <h3>ROLE:<p>  Responsible for creating and maintaining the company's website.</p></h3>
                    <h3>DURATION:<p> August 2022- january 2023</p></h3>
                    </div>}
        </div>
                    <div className="skills">
                    <h2 onClick={() => ShowContainer(!HideContainer)}> Technologies
                {HideContainer ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
                    
                {HideContainer && <div><Myskill/></div>}
                    </div>
                    <div className="skills">
                    <h2 onClick={() => showSkills(!hideSkills)}> Proffesional Skills
                {hideSkills ? <FaArrowCircleDown className="faicon"/>   :  <FaArrowCircleRight  className="faicon"/>}</h2>
                    
                {hideSkills && <div><Otherskills/></div>}
                    </div>
                        <div className="resume">
                        <a className="sd-link" href=" https://docs.google.com/document/d/1jop9LWzKtjmhZLF8DtyF25iImMwlww2j/edit?usp=drive_link&ouid=111519485417997906268&rtpof=true&sd=true" target="_blank" rel="noreferrer" id="download"> 
                                Download Resume<FaCloudDownloadAlt color="black"/></a>
                        </div>
                      
                <Footer/>
        </div>
    )
}

export default About;