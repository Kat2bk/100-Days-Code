"use strict";

// if statements
// ternary operators
// logical and operator


var appRoot = document.getElementById("app");

var app = {
    title: 'Schedule App',
    subtitle: "What's your goal for today?"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

ReactDOM.render(template, appRoot);

var user = {
    name: 'Andrew',
    age: 27,
    location: 'Bahamas'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    } else {
        return null;
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(templateTwo, appRoot);
