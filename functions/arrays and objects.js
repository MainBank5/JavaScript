//array literal 
const numb = [12, 45, 33, 12, 65, 70];
console.log(numb);

const mixed = [12, 'Bob', true, null, 'juice'];

//array constructor 
const fruits = new Array('banana', 'Apples', 'grapes', 'oranges');
console.log(fruits);

let blue;
blue = numb[3] + numb[1];

blue = `my favorite fruit is ${fruits[0]}`
// to get the length of an array
blue = fruits.length;

//immutable - changing the elements in array
blue = fruits;
fruits[3] = 'red berries';
//fruits.length = 2; to cut arrays to two elements array
console.log(blue);

let tropicals = ['citrus', 'peaches', 'coconut', 'pineapples', 'cashew'];

tropicals[fruits.length] = 'blueberries';

console.log(tropicals);

const snacks = ['candy', 'cakes', 'cranberry', 'greek'];
//mutating/changing an element
snacks[3] = 'yoghurt';
//adding an element
snacks [4] = 'biscuits'
// alternatively you can add in this way
snacks[snacks.length] = 'chips'
console.log(snacks)


//Array Methods

const cars = ['BMW', 'Audi', 'VW', 'Benz', 'volvo'];

//push method adds elements to the end
cars.push('Jaguar');

// pop method removes the last element
cars.pop();

//unshift add element to the beginning 
cars.unshift('maybach');

//shift method for removing the first element
cars.shift()

//reverse method does what it says
cars.reverse()

console.log(cars);

//methods for manipulating individul elements 

const furn = ['table', 'chair', 'vase', 'flower', 3, 56];
//include methods checks whether a specified element is in the array
 
console.log(furn.includes('glass'));

//indexof method - returns index of a specified element
console.log(furn.indexOf('flower'));

const guru = [34, 55, 95, 20, 15]; 
// slice methods cuts the array from and up to the defined index
// the slice method doesnt permanently change/cut the array unlike splice method
console.log(guru.slice(1, 4), guru);

//splice method cuts the array from the specied index up to the range 
//this method cuts the array permanently
/*console.log(guru.splice(1, 4), guru);*/

//you can use splice to remove a specific element

console.log(guru.splice(3, 1), guru);

//you can use splice to add elements
const names = ["Banana", "Orange", "Apple", "Mango"];
names.splice(2, 0, "Lemon", "Kiwi"); //2 defines the index from where new element will be added, 0 defines
//how many items will be removed from the position after adding the new ones

console.log(names); 

//using multiple methods 

const valie = [20, 33, 44, 56, 69, 78];
console.log(valie.splice(1,4).reverse().toString().charAt(1));

//charat is for strings and it returns the character at the specified index

//Nesting arrays
let p;

const transport = ['car', 'bike', 'ship', 'plane'];
const road = ['walk', 'run', 'bus'];
//nesting arrays using push
transport.push(road);

console.log(transport)
//retrieving a certain element from a concatenated array
p = transport[4] [1];
console.log(p);
//nesting array - note the differance in indexing when using this concatenation method
const allTypes = [transport, road];
console.log(allTypes);

let f = allTypes[1] [2]
console.log(f);

//concatenation of array to become one array
let c; 
const metals = ['silver', 'gold', 'mercury', 'sodium'];
const gases = ['argon', 'neon', 'oxygen', 'carbon']

//concat method
let yok = metals.concat(gases);

console.log(yok);

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildrn = arr1.concat('Timothy');
console.log(myChildrn)

//spread operator for concatenation 

c = [...metals, ...gases];

console.log(c);

//flatten an operator 

const count = [1, 2, [3, 4, 5], 6, 7, [8, 9], 10, 11]
console.log(count);

let g = count.flat();

console.log(g);



const testing = [40, 30, 50, 60, 70];

let get = testing.toString();
console.log(get);
//static methods on array object
g = Array.isArray(testing);
g = Array.isArray('Hello');
console.log(g);

//convert to array 

g = Array.from([1,2,3,45,67]);
console.log(g);

console.log(Array.from('foool'))

//create an array from a set of values/variables

const bob = 1;
const alice = 2;
const Tyler = 3;

let q = Array.of(bob, alice, Tyler);

console.log(q);

//objects 
let tol;
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin:false,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['music', 'baseball']
};

//accessing properties
tol = person.name;
tol = person['age'];

console.log(tol);

console.log(person.address.city);

console.log(person.hobbies[1]);

//mutating/changing properties

person.name = 'jane Doe'
person['isAdmin'] = true

delete person.age;

person.hasChildren = true;

tol = person;

console.log(person)

person.warmups = function () {
    console.log(`Hello, my name is ${person.name}`);
};

person.warmups();

//creating objects - think of creating an empty varaible then addding items/value
const todo = {};
todo.name = 'Learn JavaScript';
todo.description = 'Learn JScript objects';

let pooh = todo;

console.log(pooh);

//using constructor 

const task = new Object ()
task.goal = 'Learn JavaScript';
task.habit = 'Learn JScript objects';

let lot = task;
console.log(task);

//accessing values using [] brackets is ideal for two strings as such;
const person2 = {
    'first name': 'jane',
    'last name': 'Doe',
}

let sop = person2['first name'];
console.log(sop);

//nesting objects 

const person3 = {
    address: {
        coord: {
            lat: '37.78',
            lng: '-122.41'

        }
    }
}

let jav;
jav = person3.address.coord.lat;
console.log(jav);

//spread operator on objects 

const obj1 = {
     a: 1, 
     b: 2
    };
const obj2 = {
     c: 3,
     d: 4
    };

const obj3 = {...obj1, ...obj2};
x = obj3;
console.log(x);

//alternatively
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;
console.log(x);

const todos = [
    {id: 1, name: 'buy milk'},
    {id: 2, name: 'buy eggs'},
    {id: 3, name: 'buy bread'}
];

todos.push({id: 4, name: 'buy flour'});
console.log(todos)

x = todos[3].name;
console.log(x);

//if you want to put the keys or values into an array

x = Object.values(person);
console.log(x);

//to get the length of an object
x = Object.keys(person).length;
console.log(x);

//an array of key:value pairs or convert all of them to array

x = Object.entries(todo);
console.log(x);

//check if a certain property is in an object
const person4 = {
    name: 'Will Smith', 
    age: 56,
    city: 'Boston'
}
x = person4.hasOwnProperty('city');
console.log(x);

//shorthand naming assume you have the following variables
const mentor = 'John Smith';
const mentee = 'Eliud Karuga';
const combinedAge = 56;

const mentorship = {
    mentor,
    mentee,
    combinedAge,
}

console.log(mentorship);

//destructuring - if you want to extract a certain property from object and put it into variable 
//you could do something like this

const program = {
    title: 'wash',
    description: 'clean the house',
    cost: 1000,
    activities: {
        level: 1,
        medium: 'programming'
    }
};

const title = program.title;
console.log(title);

//alternatively you can easily destruct this way(Nb: I cannot redecalre title again - for your const variable use the names in the object)
const { description } = program;

console.log( description);

const {activities:{medium}} = program;
console.log(medium);

