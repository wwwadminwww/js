import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';


export default (
  <Route component={App} path='/'>
    <IndexRoute component={LoginPage} />
    <Route component={RegisterPage} path='register' />
    <Route component={ForgotPasswordPage} path='forgot' />
  </Route>
);