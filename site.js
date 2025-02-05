const hours = new Date().getHours() // get the current hour
//
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let greeting;
if (isMorning) {
    greeting = "Good Morning!";
} else if (isAfternoon) {
    greeting = "Good Afternoon!";
} else if (isEvening) {
    greeting = "Good Evening!";
}

const welcome = document.querySelector('#welcome');
welcome.textContent = `${greeting} Welcome to Evan's Cool Site!`;

// secret message
localStorage.setItem("It's a secret to everybody.", "Secret message: World of Warcraft reference?");
const secretMessage = localStorage.getItem("It's a secret to everybody.");
console.log(secretMessage);
