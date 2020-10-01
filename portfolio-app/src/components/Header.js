import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/components/HeaderStyle.scss';

const Header = () => {
    return (
        <div>
        <NavLink exact to="/" activeClassName="is-active">Main</NavLink>
        <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
        <NavLink to="/about" activeClassName="is-active">About Me</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </div>
    )
}

export default Header;