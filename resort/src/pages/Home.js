import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";

const Home = () => {
    return (
        <React.Fragment>
        <Hero hero="defaultHero">
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
        Our Rooms
        </Link>
        </Banner>
        </Hero>
        <Services />
        </React.Fragment>
    )
}

export default Home;

// we are adding the className like props to reuse and change it. there are two of them: .defaultHero and .roomsHero

// we want to add defaultProps in Hero component

// we are importing Banner, and moving the children props inside the Hero component. we are giving the props to the title and subtitle

// we are importing Link for the button to route to /rooms