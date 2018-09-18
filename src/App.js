import React, { Component } from 'react';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Product  from './components/product/Product';
import Service from './components/service/Services';
import Contact from './components/contact/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
            {/* <Switch>           */}
              <Header/>
              <div style={{marginTop:'92px'}}/>
              <Route
                path="/"
                component={Homepage}
                exact
                />
              <Route
                path="/product"
                component={Product}
                exact
                />
                <Route
                path="/services"
                component={Service}
                exact
                />
                <Route
                path="/contact"
                component={Contact}
                exact
                />
            {/* </Switch> */}
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
