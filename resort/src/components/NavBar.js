import React from "react";
import logo from "../images/logo.svg";
import {Link} from "react-router-dom";
import {FaAlignRight} from "react-icons/fa";

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
        <button type="button" className="nav-btn" onClick={this.handleToggle}><FaAlignRight className="nav-icon"/></button>
    </div>
    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/rooms">Rooms</Link></li>
    </ul>
</div>
</nav>  
    );
    }
}

// it is better not to hard code in your links in case something changes, but since there is not many links it is okay, but normally you wouldn't do it this way. You would set up your data as an array and forEach through it.

// we set up our state within the className of the unordered list and check if it is true, use these classes, if not use this one -- we use it within the nav-center div, not nav-header

// we built a class component because we will be handling state for a toggle mechanism for the icon and link