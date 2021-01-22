import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';
import Campusdisplay from './Campusdisplay'

const AllCampusesView = props => {
  return (
    <div className="all-players">
       {/*  to check the api response */}
      {
          props.allCampuses.map(campus => (
           <Campusdisplay key={campus.id} name={campus.name} image= {campus.image} 
               numberstudents= {campus.numberstudents} />
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired
};

export default AllCampusesView ;
