import React from 'react';
import {connect} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const {auth} = this.props;
    return (
      <div className="header">
        <div className="container-custom header-content">
          <div className="logo">
            <NavLink to="/" activeClassName="active">
              <span className="short-name">T</span>
              <span className="name">NTT</span>
            </NavLink>
          </div>
          {
            !!auth ?
              <div className="menu">
                Hello {auth.full_name}
              </div>
              :
              <div className="menu">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
          }

        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return {auth: state.auth}
})(Header);
