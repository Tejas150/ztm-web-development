// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;
const obj = {a, b, c};



// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var message = `hello ${firstName} have I met you before?`
// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

var sym = Symbol("this is my first symbol");
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
   if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}