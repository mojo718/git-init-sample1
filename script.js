// console.log(window);
console.log(this); // global scope


// What is this keyword?
// refers to an Object that is executing the current piece of code
var greetMessage = "Hello World!";

function greet() {
    console.log(this);
}

greet();

var student = {
    firstName: "Nimit",
    lastName: "Patel",
    test: {
        fn: function() {
            console.log()
        }
    },
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

console.log(student.fullName());