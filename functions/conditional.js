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