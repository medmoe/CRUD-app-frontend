import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { AllPlayersContainer, AllStudentsContainer, AllCompusesContainer } from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/all-students" component={AllStudentsContainer} />
      <Route exact path="/all-compuses" component={AllCompusesContainer} />
=======
import HomepageContainer from '../containers/HomepageContainer'
var AllCampusesContainer = require('../containers/AllCampusesContainer')

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route  path="/allcampuses" component={AllCampusesContainer} />
>>>>>>> master
    </Switch>
  )
}

export default RoutesView;
