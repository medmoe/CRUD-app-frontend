import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component{

    render() {
        return (
            <div id="navbar"> 
                <div id="homelink">
                    <Link to='/'> <h1 className="display-3">Home</h1></Link>
                </div>
                <div className="campus_student_link">
                    <div id="campuses"><Link to='/campuses' > <h1 className="display-3">Campuses</h1> </Link></div>
                    <div id="students"><Link to='/students' > <h1 className="display-3">Students</h1> </Link></div>
                </div>
            </div>
        )
    }
}

export default NavBar