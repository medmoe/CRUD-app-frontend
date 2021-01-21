import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from '../containers/HomepageContainer'

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
    </Switch>
  )
}

export default RoutesView;
