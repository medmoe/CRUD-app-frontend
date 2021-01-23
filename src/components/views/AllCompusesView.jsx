import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';
import Campusdisplay from './Campusdisplay'

const AllCompusesView = props => {
  return (
    <div className="all-students">
      {props.allCompuses.map((item) => 
         <Campusdisplay key={item.id} name={item.name} 
         image= {item.image} numberstudents= {item.numberstudents} id = {item.id}/>)
      }
    </div>
  );
};

AllCompusesView.propTypes = {
  allCompuses: PropTypes.array.isRequired
};

export default AllCompusesView;



