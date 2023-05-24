import React from "react";
import Header from "./Header";
// import Project from "./project";
// import project from "../projects";
// import Myskill from "./skills";
import Footer from "./footer";


// function createCard(project) {
//     return (
//       <Project
//         key={project.id}
//         title={project.title}
//         img={project.imgURL}
//         Description={project.Description}
//         stack={project.stack}
//         link={project.link}
//       />
//     );
//   }

function App (){
    return(
        <div className="container">
            <Header/>
            {/* <h1> Projects</h1>
            {project.map(createCard)}
           <button>View All Projects </button>
           <h1>Skills</h1>
           <Myskill/>
           <h1>Contact </h1>*/
           
           <Footer/> }
        </div>
    )
}

export  default App