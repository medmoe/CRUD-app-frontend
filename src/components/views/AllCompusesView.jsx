import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';

const AllCompusesView = props => {
  return (
    <div className="all-compuses">
      {props.AllCompuses.map(student => (
        <div key={compuse.id}>
          <h1>{compuse.name}</h1>
          <img src = {compuse.imageURL}></img>
        </div>
      ))}
    </div>
  );
};

AllCompusesView.propTypes = {
  AllCompuses: PropTypes.array.isRequired
};

export default AllCompusesView;