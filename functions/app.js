function greetings() {
    console.log('Hello world');
}

greetings();

function add (num1 , num2) {
    console.log(num1 + num2);
}

add(90, 20);

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

function first () {
    const x = 200;

    function second () {
        const y = 300;
        console.log(x + y);
    }

    second();
}

first();
