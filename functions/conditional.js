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
if (hour == 6 || hour == 20) {
    console.log('brush your teeth');
}