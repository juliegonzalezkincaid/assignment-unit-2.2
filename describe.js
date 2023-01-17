// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//    We make a variable called 'name' and set it to 'Dane' as its value.
//    If variable 'name' is equal to 'Mary' the console will show 'Hi Mary!'
//    If the variable 'name' is something other than 'Mary' the console will show 'How do you do?'
//    So since the code is  let name == 'Dane'  the console will log 'How do you do?' 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//   The variable is 'secret' has no value
//   The variable 'code' has a value of 123
//   If the the 'code' has a value of 123 THEN then variable'secret' is given the value of 'super' AND
//      then we multiply the value of 'code' by 2.  (which would be 246)

//   If 'code' has a value greater than 250 THEN the variable 'secret' is given the value of 'duper'
//   So this console would log the variable 'secret' to have the value of 'super' because 246 is less than 250

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//    Let is the declaration/defining of a variable
//    We declare that the variable 'isStudent' and the value of the boolean is 'true' 
//       declaring that the variable 'age' has a value of '34' AND
//       declaring the variable 'zip' will have a value of '55407'

//    If the variable 'isStudent' is 'true' AND the 'zip' is greater than '80000' the console
//       will log 'Your're a student on the West Coast!'
//    If the variable 'isStudent' is 'false' OR the 'age' is less than '30' the console will 
//       log 'What are your hobbies?'
//    If the variable 'isStudent' is 'true' the console will log 'Welcome to Prime' if not
//       the console will log 'How about the weather?'

//    The console log for this code would be 'Welcome to Prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX-
//     If the variable 'mix' has a value of 'true' then the value of 'colorOne' should be 'purple'
//     The code should then be: 
//          let colorOne = 'purple';
//          let colorTwo = 'blue';
//          let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX-
// && should be used instead of || (or)  
//The code should say 
//if( temp > 39 && time >= 4)
//  console.log ('throw away the food!');

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/




//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX-
// The age and minAge are reversed and should instead read in the order of 
//if( age >= minAge ){
//  console.log('enter');
//} else { 
  console.log ( 'no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

