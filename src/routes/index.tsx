import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/DashboardAlbum';
import AlbumDetail from '../pages/AlbumDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/album" component={AlbumDetail} />
  </Switch>
);

export default Routes;
