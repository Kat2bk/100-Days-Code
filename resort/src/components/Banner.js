import React from "react";

export default function Banner({ children, title, subtitle}) {
    return (
        <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
        </div>
    )
}

// we could do everything inside Hero component, but we want to make it more customizable and manageable. So we are creating the banner, which will be the box in the center of the Hero.

// we are making three deconstructed props: title, subtitle, children.

// the children are the changeable props (button) situated within the Hero component which we have imported within several other pages.

// classNames we are using are .banner, .banner h1, .banner div, .banner p