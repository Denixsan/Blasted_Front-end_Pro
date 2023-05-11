function sum() {
  let summa = 0;
  return function (num) {
    return (summa += num);
  };
}
let plus = sum();
console.log(plus(3));
console.log(plus(5));
console.log(plus(20));