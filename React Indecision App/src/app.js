
var appRoot = document.getElementById("app");

var app = {
    title: 'Schedule App',
    subtitle: "What's your goal for today?"
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
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