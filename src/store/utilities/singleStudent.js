import axios from 'axios'

//Action types
const FETCH_SINGLESTUDENT = 'FETCH_SINGLESTUDENT'

//Action creators
const fetchSingleStudent = student => {
    return {
        type: FETCH_SINGLESTUDENT,
        payload: student
    }
}

//thunk
export const fetchSingleStudentThunk = () => dispatch => {
    const sampleStudent = {
        firstName: 'test',
        lastName: 'testing',
        email: 'test@gmail.com',
        imageUrl: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
        gpa: 3.5,
        campus: 'Brooklyn College'
    }

    return dispatch(fetchSingleStudent(sampleStudent))
    //sample axios call while waiting for backend
//     return axios
//   .get('http://localhost:1234/api/students/:id')
//   .then(res => res.data)
//   .then(student => dispatch(fetchSingleStudent(student)))
//   .catch(err => console.log(err))
}

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SINGLESTUDENT:
            console.log('got student')
            return action.payload
        default:
            console.log('default')
            return state;
    }
}

export default rootReducer