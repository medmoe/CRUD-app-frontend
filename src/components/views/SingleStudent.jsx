import React from 'react'
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class SingleStudent extends React.Component {
    linkToCampus = (campusName) => {
        return <Link to = '/test'>{campusName}</Link>
    }
    render(){
        return (
            <div className = 'singlestudent'>
                {/* <p>testing single student {this.props.studentId}</p> */}
                <div>
                    <h3>{this.props.student.firstName} {this.props.student.lastName} </h3>
                    <div>
                        <img src = {this.props.student.imageUrl} alt = 'profile' />
                    </div>
                    <p>email:  {this.props.student.email}</p>
                    <p>gpa: {this.props.student.gpa}</p>
                    <div>
                        <h4>Campus</h4>
                        {this.props.student.campus ? this.linkToCampus(this.props.student.campus) : 'no campus available'}
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleStudent