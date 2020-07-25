import React from "react";
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
    state={
        isOpen: false
    }

    // we can do a implicit return in this case, otherwise you would set it up as an arrow function in which you could use prevState and prevProps as arguements... an updater function

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }

    render() {
        return (
        <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
        <Link to="/">
        <img src={logo} alt="Beach Resort logo" />
        </Link>
        </div>
        </div>
        </nav>  
        )
    }
}

// we built a class component because we will be handling state for a toggle mechanism for the icon and link