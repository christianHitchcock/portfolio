import React from "react";

function Project(props) {
  const stack = props.stack;
  const stackList = stack.map((stack,index) =>  
  <li key={index}>{stack}</li>
  );
  return (
    <>
    <div className="card  scroll-in">
      <div className="top">
        <img src={props.img} alt="" />
      </div>
      <div className="bottom">
       <h2>{props.title}</h2>
       <p>{props.Description}</p>
       <ul>
          {stackList}
      </ul>
      </div>
    </div>
    </>
    
  );
  }
  export default Project;