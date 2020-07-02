"use strict";

// this contains JSX that will be compiled in the scripts folder

var appName = {
    title: "Indescision App",
    subtitle: "Make things easy on you",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appName.title
    ),
    appName.subtitle && React.createElement(
        "p",
        null,
        appName.subtitle
    ),
    appName.options.length > 0 ? "Here are your options" : "No options",
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    ),
    React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add Option"
        )
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
