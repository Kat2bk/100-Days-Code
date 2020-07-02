"use strict";

// this contains JSX that will be compiled in the scripts folder

var appName = {
    title: "Indescision App",
    subtitle: "Make things easy on you",
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        appName.options.push(option);
        event.target.elements.option.value = '';
    }
    renderFormApp();
};

var appRoot = document.getElementById("app");

var renderFormApp = function renderFormApp() {
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
            "p",
            null,
            appName.options.length
        ),
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
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormApp();

// var template = (
//     <div>
//     <h1>{appName.title}</h1>
//     {(appName.subtitle && <p>{appName.subtitle}</p> )}
//     {appName.options.length > 0 ? "Here are your options" : "No options" }
//     <p>{appName.options.length}</p>
//     <ol>
//     <li>Item One</li>
//     <li>Item Two</li>
//     </ol>
//     <form onSubmit={onFormSubmit}>
//     <input type="text" name="option" />
//     <button>Add Option</button>
//     </form>
//     </div>
// )

// const appRoot = document.getElementById("app");
// ReactDOM.render(template, appRoot);
