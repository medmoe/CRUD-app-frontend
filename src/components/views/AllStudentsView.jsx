import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


class AllStudentsView extends React.Component{
  handleDelete = e => {
    this.props.deleteStudent(e.target.value)
  }
  render() {
    return (
      <div className="all-students">
        <div>
          <h1>List of students on campus</h1>
          <button onClick={this.props.addStudent}>add students</button>
        </div>
        <div className="students-list">
        {this.props.allStudents.map(student => (
          <div key={student.id} className="students-container">
            <div>
              <Link to = {`/students/${student.id}`}>
                <div className="student-image">
                  <img src={student.imageURL} alt="student image"/>
                </div>
              </Link>
              <div className="student-info">
                <p>Name: {student.firstName}, {student.lastName}</p>
                <p>Campus: {student.campus !== null ? student.campus.name : 'No campus available'}</p>
              </div>
              <button onClick = {this.handleDelete} value = {student.id}>Delete Student</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
}

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllStudentsView;
