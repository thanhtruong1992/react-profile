import React from 'react';
import { NavLink } from 'react-router-dom';

require('./index.scss');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container-custom header-content">
          <div className="logo">
            <NavLink to="/" activeClassName="active">
              <span className="short-name">T</span>
              <span className="name">NTT</span>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/login" activeClassName="active">Login</NavLink>
            <NavLink to="/register" activeClassName="active">Register</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
