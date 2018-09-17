import React from 'react'
import './index.css';
import logo  from './logo.png';

export default class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg  fixed-top navbar-dark bg-header navbar-height">
              <a to='/'><img src={logo} className="d-inline-block align-top img-fluid cus-logo" alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"><i class="fas fa-chevron-circle-down"></i></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="mr-auto"/>
                    <ul className="nav">
                      <li className="nav-item">
                        <a to='/' className="nav-link">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to='/service'>Product</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to='/service'>Service</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to='/contact'>Contact</a>
                      </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </div>
          </nav>
        );
    }
};