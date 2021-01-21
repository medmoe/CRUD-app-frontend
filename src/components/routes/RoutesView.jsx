import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllStudentsContainer from '../containers/AllStudentsContainer';
import AllCompusesContainer from '../containers/AllCompusesContainer';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllStudentsContainer} />
      <Route exact path="/" component={AllCompusesContainer} />
    </Switch>
  )
}

export default RoutesView;
