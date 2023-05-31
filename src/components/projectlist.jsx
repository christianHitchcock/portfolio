import React from "react"
import { Link } from "react-router-dom";



const ProjectList = ({projects}) => {
   
 
     return (
         <div className="container">
         
         <ul className="projects">
             {projects.map((project)=>
              <li className="project-preview" key={project.id}>
                <Link to={`/project/${project.id}`}>
                <img src={project.imgURL} alt="" />
                  <div className="bottom">
                      <h3>{project.title}</h3>
                      <p>{project.Description}</p>
                      {<ul>
                          <li>
                            {project.stack}
                          </li>
                     </ul> }
                     
                 </div>
                </Link>
             
                
             </li>
             )}
            
              </ul>
              
               </div>
     )
 }



 export default ProjectList;