import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const redirect = rest.location.pathname;

  return (
    <Route {...rest} render={function(props) {
      return (
        rest.loggedIn
        ? <Component {...props} />
        : <Navigate to={{
            pathname: '/',
            state: redirect
          }} />
          
      )}
    } />
  );
}
export const withRouter = (ProtectedRoute) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    
    return (
      <Component
        history={history}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

export default withRouter(ProtectedRoute);
