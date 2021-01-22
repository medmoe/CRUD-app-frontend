import React from 'react';
import './styles/style.css';
import PropTypes from 'prop-types';

const AllCompusesView = props => {
  return (
    <div className="all-compuses">
      {props.allCompuses.map(compuse => (
        <div key={compuse.id}>
          <h1>{compuse.name}</h1>
          <h1>{compuse.image} img</h1>
        </div>
      ))}
    </div>
  );
};

AllCompusesView.propTypes = {
  allCompuses: PropTypes.array.isRequired
};

export default AllCompusesView;