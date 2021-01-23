import React from "react";
import "./styles/style.css";


const SingleCampusView = (props) => {
  let studentDisplay;
  //if there is student in this campus
  if (props.campus.students) {
    studentDisplay = 
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map(student => (
        <div key={student.id}>
          <h1>{student.firstName}</h1>
          <h1>{student.lastName}</h1>
        </div>
      ))}

      </div> 
    
  } else {
    studentDisplay = <h1>no student in this campus</h1>
  }

  return (
    <div>

      <h1>{props.campus.name}</h1>
      <h1>{props.campus.image} img</h1>
      <h1>{props.campus.address}</h1>
      <h1>{props.campus.description}</h1>
        {studentDisplay}

    </div>
  );
};

export default SingleCampusView;
