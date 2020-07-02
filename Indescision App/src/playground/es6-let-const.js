// Block scoping

var fullName = "Katherine Kumar";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);