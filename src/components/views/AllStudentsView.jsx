import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const AllStudentsView = props => {
  return (
    <div className="all-students">
      {props.allStudents.map(student => (
        <div key={student.id}>
          <Link to = {`/students/${student.id}`}>
          <h1>{student.firstName}</h1>
          <h1>{student.lastName}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;
