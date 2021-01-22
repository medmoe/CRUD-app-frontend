import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomepageView from '../views/HomepageView';

// Smart container;
class HomepageContainer extends Component {


  render() {
    return <HomepageView />
  }
}

// Map state to props;
const mapState = state => {
  return null
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return null
}

// Type check props;

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(HomepageContainer);