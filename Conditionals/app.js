// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your Number Is Less Than 0.5!!");
// } else {
//     console.log("Your Number is greater (or equal) than 0.5!!");
// }
// console.log(random);


// const dayOfWeek = prompt('Enter A Day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek == 'saturday') {
//     console.log("Yay I Love Saturdays!");
// } else if (dayOfWeek == 'friday') {
//     console.log("Yay I Love Fridays!");
// } else {
//     console.log("MEH");
// }


// const age = prompt('Enter A Age');

// if (age < 5) {
//     console.log("You are a child. You get in for free!");
// } else if (age < 10) {
//     console.log("You are a child. You pay 10$");
// }  else if (age < 65) {
//     console.log("You are a adult. You pay 50$");
// }  else {
//     console.log("You are a senior. You pay 10$");
// } 


const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }

} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS!");
}

