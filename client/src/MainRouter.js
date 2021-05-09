import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Builder from './components/Builder';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Template1 from './components/templates/template1/Template1';
import Template2 from './components/templates/template2/Template2';

const MainRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/builder" component={Builder} />
        <Route path="/password/forgot" component={ForgotPassword} />
        <Route path="/password/reset" component={ResetPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/template1" component={Template1} />
        <Route path="/template2" component={Template2} />
      </Switch>
    </div>
  );
}

export default MainRouter;
