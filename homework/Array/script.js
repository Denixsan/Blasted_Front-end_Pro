let arr = [];
let long = prompt(`Type the length of array`);
long = parseInt(long);
if (long === null || long === `` || isNaN(long)) {
    if (confirm(`You didn't type a number. Would you like to try again?`)) {
        window.location.reload();
    }
    else {
        alert(`OK. Bye.`);
        window.close();
    }
}
else {
    for (i = 1; i <= long; i++) {
        let num = prompt(`Type the number ` + i);
        num = parseInt(num);
        if (num === null || num === `` || isNaN(num)) {
            alert(`You didn't type a number. Try again`);
                break;
        }
        else {
        arr.push(num);
        }
    }
}
if (arr.length == 0) {
    window.location.reload();
}
else {
    let numText1 = arr.join(`, `);
    document.getElementById(`text1`).innerHTML = numText1;
    arr.sort((a,b) => a-b);
    let numText2 = arr.join(`, `);
    document.getElementById(`text2`).innerHTML = numText2;
}
if (arr.length >= 5) {
    arr.splice(1,3);
    let numText3 = arr.join(`, `);
    document.getElementById(`text3`).innerHTML = numText3;
}