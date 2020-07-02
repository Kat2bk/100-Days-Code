// this contains JSX that will be compiled in the scripts folder

const appName = {
    title: "Indescision App",
    subtitle: "Make things easy on you",
    options: ['One', 'Two']
}

var template = (
    <div>
    <h1>{appName.title}</h1>
    {(appName.subtitle && <p>{appName.subtitle}</p> )}
    {appName.options.length > 0 ? "Here are your options" : "No options" }
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
    <form>
    <input type="text" name="option" />
    <button>Add Option</button>
    </form>
    </div>
)

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);