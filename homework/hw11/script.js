const array = [1, 2, 3, 4, 5, 6, 7];
let arrText = array.join(`, `);
document.getElementById(`array1`).innerHTML = arrText;
console.log(array);
function removeElement(array, number) {
    const index = array.indexOf(number);
    if (index > -1) { 
        array.splice(index, 1);
}
}
removeElement(array, 5);
arrText = array.join(`, `);
document.getElementById(`array2`).innerHTML = arrText;
console.log(array);