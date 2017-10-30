import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'reactstrap';
import './Navs.css';

 class Navs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
          <header id="header-wrap">
            <div id="roof" className="hidden-xs">
                <div className="container">
                  <div className="col-md-6 col-sm-6">
                    <div className="info-bar-address">
                       <i className="icon-location-pin"></i>
                        Minneapolis, MN, United States
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="quick-contacts">
                        <span><i className="icon-phone"></i> (00) 123 456 789</span>
                        <span><i className="icon-envelope"></i><a href="#">email@gmail.com</a></span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="navigation-menu">
              <nav className="navbar navbar-default navbar-event" >
                <div className="container">
                  <div className="navbar-header col-md-2">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                      <span className="sr-only">Navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html"></a>
                  </div>

                  <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" >Pages</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              </div>
          </header>

    )};
  }

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default Navs;
