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
      <div >
       
          <h1>List of students on campus</h1>
          <button onClick={this.props.addStudent} className="addButton">add students</button>
     
        <div>
          {this.props.allStudents.length === 0 ? 
          <p>No Students available</p> 
          :
        this.props.allStudents.map(student => (
          <div key={student.id} className="students-container">
            <div>
            <Link to = {`/students/${student.id}`}>
            <div className="student-image">
                  <img src={student.imageUrl} alt="student image" className="images"/> 
              </div> 
                </Link>
              <div className="student-info">
                <p>Name: {student.firstName}, {student.lastName}</p>
                <p>Campus: {student.campus ? student.campus.name : 'No campus available'}</p>
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
