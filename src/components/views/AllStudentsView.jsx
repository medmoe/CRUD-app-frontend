import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class AllStudentsView extends React.Component {
  deleteStudent = (e) => {
    // console.log(e.target.value)
     this.props.deleteStudent(e.target.value)
  }
  render() {
      return (
        <div className="all-students">
          <h1>All Students</h1>
          {this.props.allStudents.map(student => (
            <div key={student.id}>
              <Link to = {`/students/${student.id}`}>
              <h3>{student.firstName} {student.lastName}</h3>
              </Link>
              <button onClick = {this.deleteStudent} value = {student.id}>Delete Student</button>
            </div>
          ))}
        </div>
      );
    };
}

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;
