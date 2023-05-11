if (confirm(`Welcome! Here we add, subtract, multiply and divide two numbers. Do you wish to continue?`)) {
    let num1 = prompt (`Type the first number`);
    let num2 = prompt (`Type the second number`);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        if (confirm(`One of your numbers is not a number. Please, try again.`)) {
            window.location.reload();
        }
        else {
            alert(`OK. See ya.`);
            window.close();
        }
    }
    else {
        alert(`The sum is: ` + (num1 + num2) + `. \nThe difference is: ` + (num1 - num2) + `. \nThe product is: ` + (num1 * num2) + `. \nThe fraction is: ` + (num1 / num2));
        window.location.reload();
    }
}
else {
    alert(`OK. See ya.`);
    window.close()
}