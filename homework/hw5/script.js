if (confirm(`Welcome! Here we calculate average of three numbers. Do you wish to continue?`)) {
    let num1 = prompt (`Type the first number.`);
    let num2 = prompt (`Type the second number.`);
    let num3 = prompt (`Type the third number.`);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        if (confirm(`One of your numbers is not a number. Please, try again.`)) {
            window.location.reload();
        }
        else {
            alert (`OK. See ya.`);
            window.close();
        }
    }
    else {
        alert(`Your average number is ` + (num1 + num2 + num3) / 3);
        window.location.reload();
    }
}
else {
    alert(`OK. See ya.`);
    window.close();
}