import React from "react";
import {FaCss3,  FaPhp, FaHtml5,FaJsSquare,FaReact,FaPython,FaSass,FaGithubSquare,FaNodeJs} from 'react-icons/fa'
import {SiMongodb,SiMysql} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'



function Myskill (){
    return (
        <>
        <div className="wrapper">
                <div className="skillsContainer">
                    <div className="skills">
                        <FaHtml5 className="skillsicon"/>
                        <h4>Html</h4>
                    </div>
                    <div className="skills">
                        <FaCss3 className="skillsicon"/>
                        <h4>Css</h4>
                    </div>
                    <div className="skills">
                        <FaJsSquare className="skillsicon" />
                        <h4>Javascript</h4>
                    </div>
                    
                    <div className="skills">
                        < FaReact className="skillsicon" />
                        <h4> React</h4>
                    </div> 
                </div>
       
                <div className="skillsContainer">
        
                <div className="skills">
                    <FaGithubSquare className="skillsicon" />
                    <h4> Github</h4>
                </div> 
                <div className="skills">
                    <SiMysql className="skillsicon" />
                    <h4>Mysql</h4>
                </div> 
                <div className="skills">
                <FaNodeJs className="skillsicon" />
                <h4>NodeJs</h4>
                </div> 
                  
                <div className="skills">
                    < SiMongodb className="skillsicon" />
                <h4> Mongodb</h4>
                </div> 
                </div> 
              
       <div className="skillsContainer">
       <div className="skills">
                    <BsGit className="skillsicon" />
                    <h4>Git</h4>
        </div>
       <div className="skills">
                    <FaPython className="skillsicon" />
                    <h4>Python</h4>
       </div>
       <div className="skills">
                <FaSass className="skillsicon" />
                <h4>Sass</h4>
       </div>
       <div className="skills">
                <FaPhp className="skillsicon" />
                <h4>Php</h4>
       </div>
        </div>
      
        </div>
        
       

        

      

        
       </>
    )
}

export default Myskill;