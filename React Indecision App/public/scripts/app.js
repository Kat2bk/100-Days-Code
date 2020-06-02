"use strict";

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
    location: 'New York'
};

// var userName = 'Mike';
// var userAge = 27;
// var userLocation = 'New York';

// var templateTwo = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location: {user.location}</p>
//     </div>
// );

// ReactDOM.render(templateTwo, appRoot);
