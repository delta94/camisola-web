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
  UserAccount,
} from '../components';
import path from './path';

const {
  PORTUGAL,
  BENFICA,
  PORTO,
  SPORTING,
  ACCOUNT,
  CREATE_PRODUCT,
  SETTINGS,
  ADMIN,
  PRODUCT_DETAILS,
} = path;

const Routes = () => (
  <Router>
    <NavigationHeader />
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={PORTUGAL} component={ClubPage} />
      <Route path={BENFICA} component={ClubPage} />
      <Route path={PORTO} component={ClubPage} />
      <Route path={SPORTING} component={ClubPage} />
      <Route path={ACCOUNT} component={UserAccount} />
      <Route path={CREATE_PRODUCT} component={NewProduct} />
      <Route path={SETTINGS} component={Settings} />
      <Route path={ADMIN} component={AdminPannel} />
      <Route path={PRODUCT_DETAILS} component={ProductDetail} />
      <Route>
        <h3>No match</h3>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
