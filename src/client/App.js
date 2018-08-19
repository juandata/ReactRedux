import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './assets/css/app.css';

import Header from './atoms/Header';
import Footer from './atoms/Footer';
import NavBar from './atoms/NavBar';
import {Route1} from './atoms/Route1';



//components
import {WelcomePage} from './templates/WelcomePage';
import Template1 from './templates/Template1';
import {Error} from './pages/Error';


 export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <div className="body">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/Route1" component={Route1} />
            <Route path="/Template1" component={Template1} />
            <Route component={Error} />
          </Switch>
        <Footer />
        </div>
      </React.Fragment>
    );
  }
}
