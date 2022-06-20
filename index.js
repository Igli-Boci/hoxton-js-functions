// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(i, y) {
    console.log(i + y);
}
add(Number(prompt("Enter a number.")), Number(prompt("Enter another number.")));

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(i) {
    if (i % 2 === 0) {
        console.log(true);

    } else {
        console.log(false);
    }
}
isEven(Number(prompt(`Enter a number to see if its even.`)));


// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet(String(prompt("Enter your name.")));

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
    if (age >= 18) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isAnAdult(Number(prompt("Enter your age.")));

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {
    if (age < 18) {
        console.log("You still need " + (18 - age) + " years to be able to vote.");
    }
    else (
        console.log(`You can already vote.`)
    )
}
yearsToAdulthood(Number(prompt("Enter your age.")));

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(age, name) {
    if (age > 18) {
        console.log(greet.toString());
    } else if (age < 18) {
        console.log(yearsToAdulthood.toString());
    }


    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
}
