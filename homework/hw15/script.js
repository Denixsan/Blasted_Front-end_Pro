function sum() {
    let summa = 0;
    return function(num) {
    for (let i = 0; i < num; i++) {
        summa++;
    }
    return summa;
  }
}
  let plus = sum();
  console.log(plus(3));
  console.log(plus(5));
  console.log(plus(20));
