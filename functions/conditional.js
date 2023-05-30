//if (condition) {
    //  block of code to be executed if the condition is true
 // }

const kon = 8;
const art = 23;

if (art > kon ) {
    console.log(`${art} is greater than ${kon}`);
}

//if its false the code wont run

if (kon == art) {
    console.log(`${kon} is greater than ${art}`);
}

//if (condition) {
    //  block of code to be executed if condition is true

  //} else { 
    //  block of code to be executed if the condition is false 
 // }

 //else is the fallback
 if (kon === art) {
    console.log('They are the same inlcuding in terms of data type')
 } else {
    console.log('They are not the same')
 }

 //shorthand

if (kon == art) console.log('They are the same'), console.log('try the next condition');
else console.log('They are not');

//if (condition1) {
    //  block of code to be executed if condition1 is true
 // } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  //} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
 // }


const lad = new Date(2016,4,24,20,23,45);
console.log(lad);

const hour = lad.getHours();
console.log(hour);

if (hour < 12) {
    console.log('good morning');
} else if (hour < 18) {
    console.log('Good afternoon')
}
else {
    console.log('Good night')
}

//nest if statements 
if (hour < 12) {
    console.log('good morning');
    if (hour == 6) {
        console.log('Wake Up Now!')
    }
} else if (hour < 18) {
    console.log('Good afternoon')
}
else {
    console.log('Good night');
    if (hour >=22) {
        console.log('Go to bed!');
    }
}

//&& and both conditions have to be true
if (hour == 6 && hour < 15) {
    console.log('Its work time')
}
// or || one condition has to be true 
if (hour === 6 || hour === 20) {
    console.log('brush your teeth');
}

const k = new Date(2020, 4, 5, 10, 41);
const time = k.getHours();

//my own ifs. the first logic is always executed first 

if (time < 12) {
    console.log("Wake up Morning!");
    if (time === 10 || hour === 11) {
        console.log("its almost midday")
    }
} else if (time < 18 ) {
    console.log("its aftertoon");
    if (time == 15) {
        console.log("get a snack");
    }
}
else {
    console.log("Good evening");
    if (time >= 21 ) {
        console.log("Go to sleep")
    }
}

//switches 
//switch(expression) {
  //case x:
    // code block
    //break;
  //case y:
    // code block
   // break;
  //default:
    // code block
//}


const dc = new Date(2021, 6, 22, 13, 28);
const month = dc.getMonth();

switch (month) {
    case 9:
        console.log("its October, My bday month");
        break;
    case 10:
        console.log("Its November");
        break;
    case 11:
        console.log("its December");
        break;
        default:
            console.log("Its mid-year");
}

switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wensday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    
}

//The default keyword specifies the code to run if there is no case match. 
//It does not have to be the last case in a switch block: if it appears as the first case, remember to add break

switch (new Date().getDay) {
    default:
        console.log("Looking forward to the weekend");
    break;
    case 6:
        console.log("Its Saturday, Yay");
        break;
    case 0:
        console.log("Today is Sunday")

}

//different switch cases can share the code 
switch (new Date().getDay()) {
    case 4:
    case 5:
      console.log("Friday is coming");
      break;
    case 0:
    case 6:
      console.log("It is Weekend");
      break;
    default:
      console.log("Looking forward to the Weekend");
  }

//Switch cases relies on strict comparison (===).
//the values must be equal and of the same data type for the switch to work

let pol = "0";

switch (pol) {
    case 0:
        console.log("They're the same");
        break;
    case 1:
        console.log("This is the one");
        break;
    default:
        console.log("no value was found")
}

//using ranges in switch - reference to the hour const above

switch (true) {
    case hour < 12:
        console.log("It is before noon");
        break;
    case hour < 18:
        console.log("Its afternoon");
        break;
    default:
        console.log("Tuck youself in");

}
//If multiple cases matches a case value, the first case is selected.


//calculator challenge

function calculator (num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    console.log(result);
    return result;
}

calculator(25, 5, '$');

//truthy and falsy
//falsy values 
// - false
// - 0
// - empty string '' or ""
// - NaN
// - null
// - undefined

// this is used in form validation. when the input is false(nothing filled) when the input is true(filled with a certain value)

const him = '';

if (him) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

console.log(Boolean(him));

//truthy values 
//anything else that's not a falsy value
// - true
// - '0' string (0 in a string)
// - space in a empty string 
// - 'false' name false in a string 
// - [] an empty array
// - {} an empty object
// - function () {} an empty function 


//now assume users are filling this form. if they select 0 kids they'll be asked to fill the number of kids
//they have since 0 is falsy. but you can't force every user to fill the number of kids even if they dont have.
// to avoid this you can do as follows:
const kids = 0;

if (kids !== undefined) {
    console.log(`You have ${kids} kids`);
} else {
    console.log('Plese enter number of kids');
}

console.log(Boolean(kids))

//empty arrays are truthy. 

const piece = ['piece one'];

if (piece.length > 0) {
    console.log("list posts");
} else {
    console.log('no post to list')
}

//empty objects are truthy 

const profile = { home: "kiambu"};

if (Object.keys(profile).length > 0) {
    console.log("list user")
} else {
    console.log("No user")
}

// && - returns the first falsy value or the last value

let kay;

kay = 10 && 20 && 30;

kay = 10 && NaN && 70 && 90

console.log(kay);


// use case - for example displaying blog posts 

const blogs = ['Post one', 'Post two'];
// if blogs is empty
if (blogs.length === 0) {
    console.log('no blog posts')
    } 
    
else {
        console.log('list blog posts')
}


blogs.length > 0 && console.log(blogs[0]);

// || - returns first truthy value or the last value 

let back; 
//back = 10 || 96 || 70 || 90;
back = 0 || null || ''
console.log(back);

// ?? returns the right side value if the left side value is strictly either null / undefined( other falsy values will be retuned since they're not null/undefined)
//by default it returns the first value 
let kite; 
kite = 5 ?? 6;
console.log(kite);

let cat = null ?? 20;
console.log(cat);

//ternafy ioperator 

const age = 14;

if (age >= 18) {
    console.log("You can vote")
} else {
    console.log("You can't vote")
}
// the ? can be assumed/read to stand for if and : else
age >= 18 ? console.log('Yes, You can vote') : console.log("No, you can't vote");

const voting = age >= 18 ? 'You have the right to vote' : `You're not eligible to vote`;

console.log(voting);

//multiple statements 
const auth = true; 
let redirect;

/*if (auth) {
   alert("Welcome to the dashboard");
   redirect = '/dashboard'
} else {
    alert('Access Denied!!');
    redirect = "/please login";
}

console.log(redirect);*/

//shorthand 
//const redirect2 = auth ? (alert("Welcome to your dashboard"), '/dashboard') : (alert('acccess denied'), '/login');

//console.log(redirect2)


//if you only have one condition hence no need for else you can end with null 

auth ? console.log("user welcome") :null;
//alternatively
auth && console.log("Welcome user");

//loops 

//for ([initial expression], [condition expression], [Incremental Expression])

for (let i = 0; i <= 10; i++) {
    if (i ===7 ) {
        console.log('7 is my lucky number')
    } else {console.log("Number " + i);
}
}

//nested loops 

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        if (i + j === 7) {
            console.log('7 is my lucky number')
            } else {console.log("Number " + i + j);
            }
}
}

//looping through arrrays 

const clients = ['Brad', 'Sam', 'John', 'Eliud', 'Liam'];

for (let i = 0; i < clients.length; i++) {
    if (i === 2) {
        console.log('Hello ' + clients[i])
    } else {console.log(clients[i]);
}
}

//breaking and continue 

//break
/*for (let i = 0; i <= 10; i++) {
    if (i ===7 ) {
        break;
    } else {
        console.log("number " + i);
    }

}*/

//continue 

for (let i = 1; i <= 20; i++) {
    if ( i === 13) {
        console.log('Skippping the 13...')
        continue;
    }
    console.log(i)
}

//the while loop 
let i = 0
/*

while (i <= 15) {
    console.log('Numbre ' + i)
    i++;
}*/

const array = [10, 20, 30, 40, 50]; 

while (i < array.length) {
    console.log(array[i]);
    i++;
}

//nesting while loops 
let j = 0
while (j < array.length) {
    let k = 0
    while (k < array.length) {
        console.log(array[j] + ' ' + array[k])
        k++;
    }
    j++;
}


/*do {
    // code block to be executed
  }
  while (condition);
*/

// the thing with While loops is that uit runs even when the condition isnt true
let h = 10;
do {
    console.log("Number " + h);
    h++;
}
while (h <= 15)

//fizzBizz challenge 
/*Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz"
*/

for ( let r = 0; r <= 100; r++) {
    if ( r % 3 === 0 && r % 5 ===0 ) {
        console.log('FizzBuzz')
    } else if ( r % 3 === 0) {
        console.log('Fizz')
    } else if ( r % 5 === 0) {
            console.log('Buzz')
        } else {
    
    console.log(r)
                
    }
}

//using while loop 

let rt = 1;

while (rt <= 100) {

    if (rt % 3 ===0 && rt % 5 === 0 ) {
        console.log('FizzBuzz')
    } else if (rt % 3 === 0) {
        console.log('Fizz')
    } else if ( rt % 5 === 0) {
        console.log('Buzz')
    } else{
        console.log(rt)
    }
    rt++;
}

//for of loops 
const items = ['milk', 'yoghurt', 'oats', 'sugar', 'tea'];

for (let i = 0; i <= items.length; i++) {
    console.log(items[i]);
}

let lik = 0;

while (lik <= items.length) {
    if (lik === 2) {
        console.log('Eat ' + items[2])
    } else{
       console.log(items[lik]); 
    }
    lik++;
}

//cleaner way looping array using for of loops 

const goods = ['salt', 'table', 'plant', 'vase', 'toys']; 

for (const good of goods) {
    console.log(good);
}

//cleaner way looping objects in an array using for of loops
const animals = [{name: 'dog',age: 2}, {name: 'cat',age: 3} ]

for (const animal of animals) {console.log(animal.name); 
    console.log(animal.age);
}

//loop over a string 
let syntax = 'JavaScript'; 
for ( letter of syntax) {
    console.log(letter)
}

//maps
const map = new Map();
map.set('name', 'John');
map.set('age', 32);
map.set('job', 'developer');
for (const [key, value] of map) {
    console.log(key, value);
}
    
//for in statement loops through the properties of an Object:

const students = {model: 'Ducatti', age: 1990};
for (const key in students) {
    console.log(key, students[key])
}

//for in arrays
const colors = ['pink', 'purple', 'blue', 'yellow', 'white', 'black'];
for (const key in colors) {
    console.log(colors[key]);
};

// .foreach method - it calls a function for each element 
//the paramater is the name assigned to each element of the array
const socials = ['Facebook', 'Twitter', 'Instagram', 'Snapchat', 'Pinterest'];
socials.forEach(function (item) {
    console.log(item);
});

// remember how we used the arrrow function
const style = ['old', 'new', 'modern', 'ancient']; 
style.forEach((styles) => console.log(styles));
//the complete syntax for this foreach method is 
//array.forEach(function(currentValue, index, arr))
//nb- the index and arr are aoptional
const watches = ['Rolex', 'Patek', 'hueg', 'Swiss']; 
watches.forEach((watch, index, arr) => console.log(`${index} - ${watch}`, arr))
//you can also define your function outside then call it in the method 
const homwrk = [4, 5, 8, 9];

function answers(num) {
    console.log(num * 2) 
}

homwrk.forEach(answers)

// .map method - map() is a method that iterates through an array and can returns a new array
//if you store it in a const variable it creates a new array, but if you keep it as single function it iterates items 
// .map method - map() method creates a new array with the results of calling a function on every element in the calling array
const shade = ['red', 'green', 'blue', 'yellow', 'black'];
//const shades = shade.map((color) => color.toUpperCase());
//console.log(shades);

shade.map((color) => console.log(color.toUpperCase(color)));

//array with objects 
const socialObjs = [
    {name: 'Twitter' , url: 'https://twitter.com'},
    {name: 'Facebook' , url: 'https://facebook.com'},
    {name: 'Instagram' , url: 'https://instagram.com'},
    {name: 'LinkedIn' , url: 'https://linkendIn.com'},
];

socialObjs.forEach((item) => (console.log(item.url)));


// .filter method - filter() is a method that iterates through an array returns a new array
// .filter method - filter() method creates a new array with the results of calling a function on every element in the calling array
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
const evenNumbers = mixedNumbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = mixedNumbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end:
    2014},
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    { name: 'Company Eight', category: 'Technology', start: 2011, end:
    2016},
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

//get only retail companies using filter method 
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

//get companies that started in or after 1980 and ended in or before 2005 
const range = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(range);

//get companies that are 10 years and older
const decadeCompanies = companies.filter((company) => company.end - company.start >= 10);
console.log(decadeCompanies);

// .map method 
const frontEnd = ['JavaScript','Python', 'Ruby', 'Assembly'];
const changeCase = frontEnd.map((language) => language.toUpperCase(language));
console.log(changeCase);

//multiplication

const interger = [2, 3, 4, 5, 6, 7];
const fiveMultiples = interger.map((num) => num * 5);
console.log(fiveMultiples);

//more example 

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

//create an array 
const companiesArray = companies.map((company) => { return {
     name: company.name,
    category: company.category,
}    
}
)
console.log(companiesArray)

//return an array of objects with the company name and length of each company in years
const companiesLength = companies.map((company) => { return {
    name: company.name,
    length: company.end - company.start,
    }
    }
)

console.log(companiesLength);

//chaining methods
// the subsequent method takes/works with the results of the previous method
const numberK = [2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16];
const evenDouble = numberK
.filter((num) => num % 2 === 0)
.map((even) => even * 2);


console.log(evenDouble)

// .reduce method 
//array.reduce(function(total/accumulator, currentValue, currentIndex, arr), initialValue)

const numba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*const sum = numba.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);*/

//shorthand of the same 
const sum = numba.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//cart example 
//use reduce to get the total price 
const cart = [
    { id: 1, name: 'Product 1', price: 130},
    { id: 2, name: 'Product 2', price: 150},
    { id: 3, name: 'Product 3', price: 175},
]

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

//challenge
//Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and
// `email` properties of all the people that are 25 and under. The `name` property should have their 
//first and last name.
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

const youngPeople = people
.filter((person) => person.age <= 25)
.map((person) => { return {
    name: `${person.firstName} ${person.lastName}`,
    email: person.email
}})

console.log(youngPeople);

//challenge 2 
//Add all of the positive numbers in the array.
const numberi = [2, -30, 50, 20, -12, -9, 7];
const positiveNumbers = numberi
.filter((num) => num > 0)
.reduce((acc, curr) => acc + curr, 0);

console.log(positiveNumbers)
