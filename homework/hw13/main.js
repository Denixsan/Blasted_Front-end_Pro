// /* Task 1 */

// const array = [7, `string`, 9, null, 11.25, 6, true];
// let sum = 0;
// let numCounter = 0;
// console.log(array);
// function averageNumber() {
//     for (let i = 0; i <= array.length; i++) {
//         if (typeof array[i] == 'number') {
//             numCounter++
//             sum += array[i];
//         }
//     }
//     console.log(sum)
//     console.log(numCounter);
//     console.log(sum / numCounter);
// }
// averageNumber();

/* Task 2 */

// function doMath (x, znak, y) {
//     x = prompt(`Type the first number`);
//     y = prompt(`Type the second number`);
//     znak = prompt(`Add, subtract, multiply, divide or power?`);
//     x = parseFloat(x);
//     y = parseFloat(y);
//     if (typeof x == `number` && typeof y == `number`) {
//         switch (znak) {
//             case `add`:
//             case `Add`:
//             case `+`:
//                 console.log(x + ` + ` + y + ` = ` + (x + y));
//             break;
//             case `subtract`:
//             case `Subtract`:
//             case `sub`:
//             case `-`:
//                 console.log(x + ` - ` + y + ` = ` + (x - y));
//             break;
//             case `multiply`:
//             case `Multiply`:
//             case `multi`:
//             case `*`:
//                 console.log(x + ` * ` + y + ` = ` + (x * y));
//             break;
//             case `divide`:
//             case `Divide`:
//             case `div`:
//             case `/`:
//                 console.log(x + ` / ` + y + ` = ` + (x / y));
//             break;
//             case `Power`:
//             case `power`:
//             case `pow`:
//             case `^`:
//                 console.log(x + ` ^ ` + y + ` = ` + (x ^ y));
//             break;
//         }
//     }
// }
// doMath();

/* Task 3 */

// function matrixFill(matrix, length1, length2) {
// length1 = prompt("Type length in column.");
// length2 = prompt("Type length in row.");
// document.write("Matrix:<br>");
// matrix = new Array();
// matrix.length = length1;
// for (let i = 0; i < matrix.length; i++) {
//   document.write("<br>");
//   matrix[i] = new Array();
//   matrix[i].length = length2;
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] = prompt(`Type the value.`);
//     document.write(matrix[i][j]+" ");
//   };
// };
// console.log(matrix);
// };
// matrixFill();

/* Task 4 */

function lettersRemove (string, letters, lettersRemoveNumber) {
    string = prompt(`Type a word or phrase.`);
    lettersRemoveNumber = prompt (`How much letters do you wish to remove?`);
    for (i = 0; i < lettersRemoveNumber; i++) {
    letters = prompt(`Type a letter to remove.`);
    string = string.split(letters).join(``);
    }
    alert(string);
}
lettersRemove();