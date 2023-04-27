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



