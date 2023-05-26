import React from "react";


function Project(props) {
  const stack = props.stack;
  const stackList = stack.map((stack,index) =>  
  <li key={index}>{stack}</li>
  );
  return (
    <>
     <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
      </div>
      <div className="bottom">
       <h3>{props.title}</h3>
       <p>{props.Description}</p>
       {<ul>
          {stackList}
      </ul> }
      </div>
    </div>
    </>
  );
  }
  export default Project;