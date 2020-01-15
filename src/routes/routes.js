import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NavigationHeader,
  ClubPage,
  ProductDetail,
  Home,
  AdminPannel,
  Settings,
  NewProduct,
} from '../components';
import path from './path';

const {
  HOME, PORTUGAL, BENFICA, PORTO, SPORTING, ADMIN,
} = path;

const Routes = () => (
  <Router>
    <NavigationHeader />
    <Switch>
      <Route exact path={HOME}>
        <Home />
      </Route>
      <Route path={PORTUGAL}>
        <ClubPage />
      </Route>
      <Route path={BENFICA}>
        <ClubPage />
      </Route>
      <Route path={PORTO}>
        <ClubPage />
      </Route>
      <Route path={SPORTING}>
        <ClubPage />
      </Route>
      <Route path="/admin/new-product">
        <NewProduct />
      </Route>
      <Route path="/admin/settings">
        <Settings />
      </Route>
      <Route path="/admin">
        <AdminPannel />
      </Route>
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route>
        <h3>No match</h3>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
