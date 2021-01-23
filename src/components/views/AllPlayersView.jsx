import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom'

const AllPlayersView = props => {
  return (
    <div className="all-students">
    <h1> Home PAGE</h1>
     <div id="navbar"> 
      <div id="homelink">
         <Link to='/'> Home</Link>
      </div>
      <div className="campus_student_link">
        <div id="campuses"><Link to='/all-compuses' > Campuses </Link></div>
        <div id="students"><Link to='/all-students' > Students </Link></div>
      </div>
     </div>
    </div>
  );
};

AllPlayersView.propTypes = {
  allPlayers: PropTypes.array.isRequired
};

export default AllPlayersView;
