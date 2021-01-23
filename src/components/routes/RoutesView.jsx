import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer, AllStudentsContainer, AllCompusesContainer,  AddCampusContainer} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route path="/all-students" component={AllStudentsContainer} />
      <Route path="/all-compuses" component={AllCompusesContainer} />
      <Route path="/add-campus" component={AddCampusContainer} />
    </Switch>
  )
}

export default RoutesView;