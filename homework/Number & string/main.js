/* Task 1 */

let userName = prompt(`Type your name.`);
let userAge = prompt(`Type your age.`);
let userPlace = prompt(`Type the place where you are from.`);
if ((userName == null || userName == ``) || (userAge == null || userAge == ``) || (userPlace == null || userPlace == ``)) {
    alert(`Ok, you don't want to tell about yourself. Get out!`)
}
else {
alert(`My name is ` + userName + `.\nI'm ` + userAge + ` years old.` + `\nI'm from ` + userPlace + `.`);
}

/* Task 2 */

let num = 228322;
let arr = (`` + num).split(``).map(Number);
let numText = arr.join(` `);
document.getElementById(`text`).innerHTML = numText;