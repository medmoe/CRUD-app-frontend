import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleStudentThunk } from '../../thunks'
import { SingleStudentView } from '../views'

class SingleStudentContainer extends React.Component {

    componentDidMount() {
        this.props.getStudent()
    }

    render() {
        return (
            <SingleStudentView studentId = {this.props.match.params.studentid} student = {this.props.student} />
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
        getStudent: () =>  dispatch(fetchSingleStudentThunk())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SingleStudentContainer)