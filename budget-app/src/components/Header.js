import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header>
        <h1>Budget App</h1>
      <NavLink to="/create" activeClassName="is-active">Add Expenses</NavLink> 
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      </header>
    )
  }

  export default Header;