import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleCampusThunk } from "../../thunks";
import { SingleCampusView } from "../views";

// Smart container;
class SingleCampusContainer extends Component {
  componentDidMount() {
    this.props.fetchSingleCampus(this.props.match.params.id);
  }

  render() {
    return <SingleCampusView campus={this.props.campus} />;
  }
}

// Map state to props;
const mapState = (state) => {
  console.log(state);
  return {
    campus: state.singleCampus,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchSingleCampus: (id) => dispatch(fetchSingleCampusThunk(id)),
  };
};



// Export our store-connected container by default;
export default connect(
  mapState,
  mapDispatch
)(SingleCampusContainer);