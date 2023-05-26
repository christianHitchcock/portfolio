import Navbar from "./menu";
import project from "../projects";
import Project from "./project";
import Footer from "./footer";


 function createCard(project) {
     return (
       <Project
       key={project.id}
         title={project.title}
         img={project.imgURL}
         Description={project.Description}
         stack={project.stack}
         link={project.link}
       />
     );   }



function Projects () {
    return(
        <div className="projectWrapper">
             <Navbar/>
            <h1> Projects</h1>
            <div >
            {project.map(createCard)}
            </div>
           
           
           <Footer/> 
        </div>
    )
}

export default Projects;