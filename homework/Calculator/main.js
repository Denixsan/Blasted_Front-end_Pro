let calcul = prompt(`Welcome! Here we add, subtract, multiply and divide two numbers. What do you wish to do?`);
if (calcul === null) {
  alert(`OK. See ya!`);
  window.close();
}
else {
  let number1 = prompt(`Type the first number`);
  let number2 = prompt(`Type the second number`);
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  if (isNaN(number1) || isNaN(number2)) {
    if (confirm(`Are you nuts? Let's try it again.`)) {
      window.location.reload();
    } else {
      alert(`You're definitely nuts.`);
      window.close();
    }
  } else {
    switch (calcul) {
      case `Add`:
      case `add`:
        alert(number1 + ` + ` + number2 + ` = ` + (number1 + number2));
        window.location.reload();
        break;
      case `Subtract`:
      case `subtract`:
      case `sub`:
        alert(number1 + ` - ` + number2 + ` = ` + (number1 - number2));
        window.location.reload();
        break;
      case `Multiply`:
      case `multiply`:
      case `multi`:
        alert(number1 + ` * ` + number2 + ` = ` + number1 * number2);
        window.location.reload();
        break;
      case `Divide`:
      case `divide`:
      case `div`:
        alert(number1 + ` / ` + number2 + ` = ` + number1 / number2);
        window.location.reload();
        break;
      default:
        if (confirm(`Are you nuts? Let's try it again.`)) {
          window.location.reload();
        } else {
          alert(`You're definitely nuts.`);
          window.close();
        }
    }
  }
}

