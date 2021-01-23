import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';

const AllPlayersView = props => {
  return (
    <div className="all-students">
    <h1> Home PAGE</h1>
    </div>
  );
};

AllPlayersView.propTypes = {
  allPlayers: PropTypes.array.isRequired
};

export default AllPlayersView;
