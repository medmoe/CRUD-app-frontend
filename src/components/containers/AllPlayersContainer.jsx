import React, { Component } from 'react';
import { AllPlayersView } from '../views';

// Smart container;
class AllPlayersContainer extends Component {

  render() {
    return <AllPlayersView />
  }
}

// Export our store-connected container by default;
export default AllPlayersContainer;