import React from "react";

export default function Hero({ children, hero}) {
    return (
        <header className={hero}>
        {children}
        </header>
    )
}

// deconstructed props... we are passing the props into className to change it and set the children prop into header... we are going to put this hero component inside the home page

// settting up Default props to the defaultHero className... this helps with the 404 page

Hero.defaultProps = {
    hero: 'defaultHero'
}