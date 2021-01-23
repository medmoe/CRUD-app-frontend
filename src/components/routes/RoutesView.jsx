import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SingleCampusContainer, AllPlayersContainer, AllStudentsContainer, AllCompusesContainer, SingleStudentContainer } from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/campuses" component={AllCompusesContainer} />
      <Route  path = "/students/:studentid" component = {SingleStudentContainer} />
      <Route exact path="/campuses/:id" component={SingleCampusContainer} />
    </Switch>
  )
}

export default RoutesView;