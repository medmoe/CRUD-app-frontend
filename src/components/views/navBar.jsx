import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component{

    render() {
        return (
            <div id="navbar"> 
                <div id="homelink">
                    <Link to='/'> Home</Link>
                </div>
                <div className="campus_student_link">
                    <div id="campuses"><Link to='/all-compuses' > Campuses </Link></div>
                    <div id="students"><Link to='/all-students' > Students </Link></div>
                </div>
            </div>
        )
    }
}

export default NavBar