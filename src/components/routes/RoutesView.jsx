import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from '../containers/HomepageContainer'
var AllCampusesContainer = require('../containers/AllCampusesContainer')

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route  path="/allcampuses" component={AllCampusesContainer} />
    </Switch>
  )
}

export default RoutesView;
