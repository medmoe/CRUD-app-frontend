import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';

const AllStudentsView = props => {
  return (
    <div className="all-students">
      {props.allStudents.map(student => (
        <div key={student.id}>
          <h1>{student.firstName}, {student.lastName}</h1>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;