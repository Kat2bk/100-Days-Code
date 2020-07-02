"use strict";

// this contains JSX that will be compiled in the scripts folder

// const appName = {
//     title: "Indescision App",
//     subtitle: "Make things easy on you",
//     options: []
// }

// const onFormSubmit = (event) => {
//     event.preventDefault();
//     const option = event.target.elements.option.value;
//     if (option) {
//         appName.options.push(option);
//         event.target.elements.option.value = '';
//     }
//     renderFormApp();
// }

// const remove = () => {
//     appName.options.length = 0;
//     renderFormApp();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * appName.options.length);
//     const option = appName.options[randomNum];
//     alert(option);
// };

// const appRoot = document.getElementById("app");

// const renderFormApp = () => {
//     var template = (
//         <div>
//         <h1>{appName.title}</h1>
//         {(appName.subtitle && <p>{appName.subtitle}</p> )}
//         <p>{appName.options.length > 0 ? "Here are your options" : "No options" }</p>
//         <button disabled={appName.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//         <button onClick={remove}>Remove All</button>
//         <ol>
//             {
//                 appName.options.map((item) => {
//                     return <li key={item}>{item}</li>
//                 })
//             }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//         </form>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }


var visible = false;

var toggleVisible = function toggleVisible() {
    visible = !visible;
    var paragraph = document.querySelector(".info");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
    renderApp();
};

var app = document.getElementById("app");

function renderApp() {
    var visibility = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { className: "btn", onClick: toggleVisible },
            visible ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            "p",
            { className: "info", style: { display: 'none' } },
            "This is some important information"
        )
    );
    ReactDOM.render(visibility, app);
}

renderApp();
