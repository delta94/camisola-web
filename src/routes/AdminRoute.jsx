import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('camisola10-u-token');
  return (
    <Route {...rest} render={(props) => (
      token
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}/>
    )}/>
  );
};

export default AdminRoute;
