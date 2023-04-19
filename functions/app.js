//Function declarations (the regular functions)
function greetings() {
    console.log('Hello world');
}
 
greetings();

function add (num1 , num2) {
    console.log(num1 + num2);
}

add(90, 40);

function substract (num1, num2) {
    const results = num1 - num2;
    return results;
}

const subResults = substract (70, 10);

console.log (subResults);


function multiplication (num1, num2) {
    return num1 * num2;
}

const multResults = multiplication (5, 6);

console.log(multResults);

function user (name) {
    return name + 'is a registered user';
}

const output = user('Eliud ');
console.log (output);

//rest parameters

function test (...numbers) {
    return numbers;
}

console.log (test(1, 5, 6, 9, 12, 20, 22));

//objects as param 

function loginUser (student) {
    return `The user ${student.name} with the id of ${student.id} is logged in`;
}

const student = {
    name: 'Karuga', 
    id: 2,
}

console.log(loginUser(student));

//nested functions

function first () {
    const x = 200;

    function second () {
        const y = 300;
        console.log(x + y);
    }

    second();
}

first();

//function expression - basically express a function as a variable 

const addDollarSign = function (value) {
    return '$' + value;
};

console.log (addDollarSign(454));

// arrow fubnctions - lets rewrite this as an arrow function 
function exa (r, s) {
    return r + s;
}

console.log (exa(5, 23));

const arr = (r ,s) => {
    return r * s;
};

console.log (arr(23, 5));

//shorthand => means implicit return so we can simplify as follows 

const sub = (t, v) => t - v;
console.log(sub(100, 10));

//for  a single parameter you can leave out the parenthesis ()

const double = m => m * 2;
console.log(double(40));

//retuning an object 

const createObj = () => ({
    name: 'karuga', 
    age: 26
    
})

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (y){
    console.log(y);
})
//function in a callback 
numbers.forEach((n) => console.log(n));

//immediately invoked functions - used to avoid global scope poullution, where two devs migh be working 
//on the same project and may have similar variables

(function () {
    const employee = 'Levy';
    console.log(employee);
})();

//the last parenthesis are for invoking the function()

