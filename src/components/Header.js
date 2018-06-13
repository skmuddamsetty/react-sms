import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/student" activeClassName="is-active">Add Student</NavLink>
    </header>
);
export default Header;