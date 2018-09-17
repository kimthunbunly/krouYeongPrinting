import React, { Component } from 'react';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Product  from './components/product/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>          
              <Header/>
              <div style={{marginTop:'92px'}}/>
              <Route
                path="/"
                component={Homepage}
                />
              <Route
                path="/product"
                component={Product}
                />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
