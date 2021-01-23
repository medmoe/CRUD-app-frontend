import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleStudentThunk } from '../../thunks'
import { SingleStudentView } from '../views'

class SingleStudentContainer extends React.Component {

    componentDidMount() {
        this.props.getStudent(this.props.match.params.studentid)
    }

    render() {
        return (
            <SingleStudentView student = {this.props.student} />
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        student: state.singleStudent
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getStudent: (studentId) =>  dispatch(fetchSingleStudentThunk(studentId))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SingleStudentContainer)