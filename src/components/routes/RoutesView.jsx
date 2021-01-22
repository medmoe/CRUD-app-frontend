import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
