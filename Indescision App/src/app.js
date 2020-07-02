// this contains JSX that will be compiled in the scripts folder

const appName = {
    title: "Indescision App",
    subtitle: "Make things easy on you",
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        appName.options.push(option);
        event.target.elements.option.value = '';
    }
    renderFormApp();
}

const remove = () => {
    appName.options.length = 0;
    renderFormApp();
}

const appRoot = document.getElementById("app");

const renderFormApp = () => {
    var template = (
        <div>
        <h1>{appName.title}</h1>
        {(appName.subtitle && <p>{appName.subtitle}</p> )}
        {appName.options.length > 0 ? "Here are your options" : "No options" }
        <p>{appName.options.length}</p>
        <button onClick={remove}>Remove All</button>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        </form>
        </div>
    )
    ReactDOM.render(template, appRoot);
}

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