import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const AllStudentsView = props => {
  return (
    <div className="all-students">
      <div>
        <h1>List of students on campus</h1>
        <button onClick={props.addStudent}>add students</button>
      </div>
      <div className="students-list">
      {props.allStudents.map(student => (
        <div key={student.id} className="students-container">
          <div>
            <Link to = {`/students/${student.id}`}>
              <div className="student-image">
                <img src={student.imageURL} alt="student image"/>
              </div>
            </Link>
            <div className="student-info">
              <p>Name: {student.firstName}, {student.lastName}</p>
              <p>Campus: {student.campusId}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;
