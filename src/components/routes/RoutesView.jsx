import React from 'react';
import { Switch, Route } from 'react-router-dom';
// <<<<<<< HEAD
// import HomepageContainer from '../containers/HomepageContainer'
// var AllCampusesContainer = require('../containers/AllCampusesContainer')

// const RoutesView = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={HomepageContainer} />
//       <Route  path="/allcampuses" component={AllCampusesContainer} />

import { AllPlayersContainer, AllStudentsContainer, AllCompusesContainer } from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/all-students" component={AllStudentsContainer} />
      <Route exact path="/all-compuses" component={AllCompusesContainer} />

    </Switch>
  )
}

export default RoutesView;
