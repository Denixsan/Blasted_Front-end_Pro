var obj1 = document.getElementById(`videoblock1`);
var obj2 = document.getElementById(`videoblock2`);
var obj3 = document.getElementById(`videoblock3`);
var obj4 = document.getElementById(`videoblock4`);
let userName = prompt(`Type your name, please.`);
if (userName == null || userName == ``) {
    if (confirm(`Your name is not valid. Would you like to try again?`)) {
    window.location.reload();
    }
    else {
        alert(`OK. Have it your way.`);
        window.close();
    }
  } 
else {
    let quest = prompt(`Hello, ` + userName + `! How are you?` + `\nChoose your mood, please. \n(Just type one of four letters)` + `\nA. Very good!` + `\nB. I'm OK. ` + `\nC. Not good.` + `\nD. I'm dead.`);
    if (quest == `A` || quest == `a`) {
        obj1.style.display = `flex`;
    }
    else if (quest == `B` || quest == `b`) {
        obj2.style.display = `flex`;
    }
    else if (quest == `C` || quest == `c`) {
        obj3.style.display = `flex`;
    }
    else if (quest == `D` || quest == `d`) {
        obj4.style.display = `flex`;
    }
    else if (quest == null) {
        alert(`OK. Have it your way.`);
        window.close();
    }
    else {
        alert(`Nah, man! Type A, B, C or D. Let's try again.`)
        window.location.reload();
    }
  }