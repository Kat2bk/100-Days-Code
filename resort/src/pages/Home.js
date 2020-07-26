import React from 'react';
import Hero from "../components/Hero";

const Home = () => {
    return (
        <Hero hero="defaultHero" />
    )
}

export default Home;

// we are adding the className like props to reuse and change it... there are two of them... .defaultHero and .roomsHero

// we want to add defaultProps in Hero component