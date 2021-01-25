import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleStudentThunk, updateSingleStudentThunk } from '../../thunks'
import { SingleStudentView } from '../views'

class SingleStudentContainer extends React.Component {

    componentDidMount() {
        this.props.getStudent(this.props.match.params.studentid)
    }

    render() {
        return (
            <SingleStudentView student = {this.props.student} campuses = {this.props.campuses} updateStudent = {this.props.updateStudent} />
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        student: state.singleStudent,
        campuses: state.allPlayers.allCampuses
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getStudent: (studentId) =>  dispatch(fetchSingleStudentThunk(studentId)),
        updateStudent: (student) => dispatch(updateSingleStudentThunk(student))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SingleStudentContainer)