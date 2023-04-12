let num1 = 10;
let num2 = 1;
let num3 = 15
let num4 = 30;
let sum = 0;
let multi = 1;

/* Task 1 */

// for (num1 = 10; num1 < 20; num1++) {
//     document.write(num1 + ', ');
// }
// document.write(20);

/* Task 2 */

// while (num1 <= 20) {
//     num1 = num1*num1;
//     console.log(num1);
//     num1 = Math.sqrt(num1);
//     num1++;  
// }

/* Task 3 */

// while (num2 <= 10) {
//     console.log(num2 + ` * ` + 7 + ` = ` + (num2 * 7) );
//     num2++;
// }

/* Task 4 */

// while (num2 <= 15) {
//     sum = sum + num2;
//     num2++;
// }
// console.log(sum);

/* Task 5 */

// while (num3 <= 35) {
//     multi = multi * num3;
//     num3++;
// }
// console.log(multi);

/* Task 6 */

// while (num2 <= 500) {
//     sum = sum + num2;
//     num2++;
// }
// sum = sum / 500;
// console.log(sum);

/* Task 7 */

// while (num4 <= 80) {
//     sum = sum + num4;
//     num4 += 2;
// }
//     console.log(sum);

/* Task 8 */

// for (num4 = 100; num4 < 198; num4++) {
//     if (num4 % 3 == 0)
//     document.write(num4 + ', ');
// }
// document.write(198);

/* Task 9 */

// let number = prompt(`Type your number`), divisor = [], i = 1;
// while(i <= number) {
//     if(number % i == 0) divisor.push(i);
//     i++;
// }
// if (divisor.length > 2) {
// alert(divisor);
// }
// else {
//     alert(number + ` is a prime number.`)
// }


/* Task 10 */

// let number = prompt(`Type your number`), divisor = [], i = 2;
// while(i <= number) {
//     if (number % i == 0) divisor.push(i);
//     i += 2;
// }
// if (divisor.length > 0) {
// alert(divisor);
// }
// else {
//     alert(number + ` has no even divisors.`)
// }

/* Task 11 */

// let number = prompt(`Type your number`);
// for(let i = 2; i <= number; i +=2) {
//     if (number % i == 0) 
//     sum += i;
// }
// if (sum > 0) {
// alert(sum);
// }
// else {
//     alert(number + ` has no even divisors.`)
// }

/* Task 12 */

// while (num2 <= 10) {
//     while (multi <= 10) {
//     console.log(num2 + ` * ` + multi + ` = ` + (num2 * multi) );
//     multi++;
//     };
//     multi = 1;
//     num2++;
// }