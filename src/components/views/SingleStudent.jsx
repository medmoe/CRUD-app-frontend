import React from 'react'
import './styles/style.css';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class SingleStudent extends React.Component {
    linkToCampus = (campus ) => {
        return <Link to = {`/campuses/${campus.id}`}>{campus.name}</Link>
    }
    render(){
        return (
            <div className = 'singlestudent'>
                {console.log(this.props.student)}
                <div>
                    <h3>{this.props.student.firstName} {this.props.student.lastName}</h3>
                    <div>
                        <img src = {this.props.student.imageUrl} alt = 'profile' />
                    </div>
                    <p>email:  {this.props.student.email}</p>
                    <p>gpa: {this.props.student.gpa}</p>
                    <div>
                        <p>Campus</p>
                        <p>{this.props.student.campusId ? this.linkToCampus(this.props.student.campus) : 'no campus available'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleStudent