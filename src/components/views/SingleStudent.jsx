import React from 'react'
import './styles/style.css';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class SingleStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            gpa: this.props.student,
            campusId: null,
            edit: false,
            campus: null
        }
    }

    linkToCampus = (campus ) => {
        return <Link to = {`/campuses/${campus.id}`}>{campus.name}</Link>
    }

    handleSubmit = e => {
        this.setState({
            edit: false
        })
        console.log(this.state)
        this.props.updateStudent(this.state)
        
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleEditClick = () => {
        this.setState({
            edit: true,
            id: this.props.student.id,
            campusId: this.props.student.campus.id,
            campus: this.props.student.campus
        })
    }
    render(){
        return ( !this.state.edit ?
            <div className = 'singlestudent'>
                {console.log(this.props.student.id)}
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
                <button onClick = {this.handleEditClick}>Edit Student</button>
            </div>
            :
            <div className = 'studentForm'>
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'studentInput'>
                    <label>
                        First name:
                        <input type = 'text' onChange = {this.handleChange} name = 'firstName' required = {true} defaultValue = {this.props.student.firstName} />
                    </label>
                    </div>
                    <div className = 'studentInput' >
                    <label>
                        Last name:
                        <input type = 'text' onChange = {this.handleChange} name = 'lastName' required = {true}  defaultValue = {this.props.student.lastName} />
                    </label>
                    </div>
                    <div className = 'studentInput'>
                    <label>
                        Email:
                        <input type = 'email' onChange = {this.handleChange} name = 'email' required = {true}  defaultValue = {this.props.student.email} />
                    </label>
                    </div>
                    <div className = 'studentInput'>
                    <label>
                        GPA:
                        <input type = 'number' min = {0} max = {4} onChange = {this.handleChange} name = 'gpa' defaultValue = {this.props.student.gpa} />
                    </label>
                    </div>
                    <div>
                        <input type = 'submit' />
                    </div>
                </form>
            </div>
        )
    }
}

export default SingleStudent